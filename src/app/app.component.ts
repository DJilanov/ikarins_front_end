import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cache } from './cache/cache';
import { Dictionary } from './dictionary/dictionary.service';
import { FetcherService } from './services/fetcher.service';
import { PagesService } from './services/pages.service';
import { PagesDataService } from './services/pages.data.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './theme.css', './grid.css'],
    encapsulation: ViewEncapsulation.None 
})

export class AppComponent {

    private pages: Array<Object> = [];
    private pagesData: Array<Object>;

    constructor(
        private cache: Cache,
        private router: Router,
        private fetcher: FetcherService,
        private dictionary: Dictionary,
        private pagesService: PagesService,
        private pagesDataService: PagesDataService,
        private eventEmiterService: EventEmiterService,
        private errorHandlerService: ErrorHandlerService
    ) {
        this.setData(cache.getPages());
        fetcher.getPages().subscribe(
            data => this.setData(data),
            err => this.errorHandlerService.handleError(err)
        );
    };

    private setData(result) {
        var response = {
            pages: [],
            pagesData: []
        };
        // if it comes from the back-end translate it, else it is cached version
        if(result.json) {
            response = result.json();
        } else {
            response = result;
        }
        
        this.setPages(response.pages);
        this.setPagesData(response.pagesData);
        this.eventEmiterService.emitFetchedData(response);
    }

    private setPages(pages) {
        this.pages = pages;
        this.pagesService.setPages(this.pages);
    }

    private setPagesData(pagesData) {
        this.pagesData = pagesData;
        this.pagesDataService.setPagesData(this.pagesData);

    }
}
