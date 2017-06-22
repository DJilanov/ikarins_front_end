import { Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dictionary } from '../../dictionary/dictionary.service';
import { PagesService } from '../../services/pages.service';
import { PagesDataService } from '../../services/pages.data.service';
import { EventEmiterService } from '../../services/event.emiter.service';

const blogLink: string = 'novini';

@Component({
    selector: 'page',
    styleUrls: ['./page.component.css'],
    templateUrl: './page.component.html'
})

export class PageComponent {
    private pageData: Object = {
        page: {},
        subPages: []
    };
    private pages: Array<Object>;
    private pagesData: Array<Object>;

    private insuranseLink: String = '';

    private enableShortMessages: Boolean = false;

    constructor(
        private router: Router,
        private dictionary: Dictionary,
        private pagesService: PagesService,
        private routeParams: ActivatedRoute,
        private pagesDataService: PagesDataService,
        private eventEmiterService: EventEmiterService
    ) {
        this.routeParams.params.subscribe(params => this.setParams(params));
    };

    private setParams(params) {
        if(params['insurance']) {
            this.insuranseLink = params.insurance.toLowerCase();
            this.enableShortMessages = ( blogLink == this.insuranseLink );
            this.pages = this.pagesService.getPages();
            this.pagesData = this.pagesDataService.getPagesData();
            this.getPageData();
            // on categories update we update the local array
            this.eventEmiterService.dataFetched.subscribe(data => this.onFetchedData(data));
        }
    }

    private onFetchedData(data) {
        this.pages = data.products;
        this.pagesData = data.categories;
        this.getPageData();
    }

    private getPageData() {
        // we empty the array with sub pages
        this.pageData['subPages'].length = 0;
        for(let pagesCounter = 0; pagesCounter < this.pagesData.length; pagesCounter++) {
            if(this.insuranseLink == this.pagesData[pagesCounter]['owner']) {
                if(this.pagesData[pagesCounter]['type'] == 'page') {
                    this.pageData['page'] = this.pagesData[pagesCounter]
                }
                if(this.pagesData[pagesCounter]['type'] == 'sub-page') {
                    this.pageData['subPages'].push(this.pagesData[pagesCounter]);
                    // if this.pagesData[pagesCounter].html[dictionary.language].length > 900
                    // добави бутон който да отваря в нова страница като отделна
                }
            }
        }
    }
}
