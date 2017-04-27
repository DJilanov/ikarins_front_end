import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
            link: 'zastrahovki_za_vas',
            src: 'zastrahovka_za_vas.png'
        },
        {
            link: 'zastrahovki_za_biznesa_vi',
            src: 'zastrahovki_biznes.png'
        },
        {
            link: 'urejdane_na_zastrahovatelni_pretencii',
            src: 'zastrahovatelni_pretencii.png'
        },
        {
            link: 'konsultacii',
            src: 'consulting.png'
        },
        {
            link: 'tehnichesko_obslujvane_na_avtomobili',
            src: 'technical_support.png'
        }
    ];

    private pageInfo:string = '';

    constructor(
        private router: Router,
        private dictionary: Dictionary,
        private pagesService: PagesService,
        private pagesDataService: PagesDataService,
        private eventEmiterService: EventEmiterService
    ) {
        this.pages = pagesService.getPages();
        for(let pagesCounter = 0; pagesCounter < this.pages.length; pagesCounter++) {
            if(this.pages[pagesCounter]['owner'] == 'home') {
                this.pageInfo = this.pages[pagesCounter]['html'][dictionary['language']];
            }
        }
    };

    private buildSrc(icon) {
        return './src/img/' + icon.src
    }
}
