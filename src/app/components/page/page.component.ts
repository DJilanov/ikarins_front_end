import { Component, Input, Output } from '@angular/core';
import { Dictionary } from '../../dictionary/dictionary.service';
import { PagesService } from '../../services/pages.service';
import { PagesDataService } from '../../services/pages.data.service';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'page',
    styleUrls: ['./page.component.css'],
    templateUrl: './page.component.html'
})

export class PageComponent {
    // options of the inner carousel
    // todo: Fill it with the real images and items
    public slides: Array<Object>;

    private pages =  Array<Object>();

    private pagesData = Array<Object>();

    constructor(
        private dictionary: Dictionary,
        private pagesService: PagesService,
        private pagesDataService: PagesDataService,
        private eventEmiterService: EventEmiterService
    ) {
      this.pages = pagesService.getPages();
      this.pagesData = pagesDataService.getPagesData();
      // on categories update we update the local array
      this.eventEmiterService.dataFetched.subscribe(data => this.onFetchedData(data));
    };

    private onFetchedData(data) {
      this.pages = data.products;
      this.pagesData = data.categories;
    }
}
