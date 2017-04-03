import { Component, Input, Output } from '@angular/core';
import { Dictionary } from '../../dictionary/dictionary.service';
import { PagesService } from '../../services/pages.service';
import { PagesDataService } from '../../services/pages.data.service';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})

export class HomeComponent {
    private pages:Array<Object> = [];

    private pagesData:Array<Object> = [];

    private icons:Array<Object> = [
        {
            link: '',
            src: 'zastrahovka_za_vas.png'
        },
        {
            link: '',
            src: 'zastrahovki_biznes.png'
        },
        {
            link: '',
            src: 'zastrahovatelni_pretencii.png'
        },
        {
            link: '',
            src: 'consulting.png'
        },
        {
            link: '',
            src: 'technical_support.png'
        }
    ];

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

    private buildLink(icon) {
        return './src/img/' + icon.src
    }
}
