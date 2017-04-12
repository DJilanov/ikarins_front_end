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

    private pageInfo:string = `
        Oт 2004 година IKARINS работи активно в областта на застраховането.
        Нашата цел е да изберем най-подходящата застраховка за всеки от клиентите ни персонално
        и според специфичните му изисквания.

        През 2015 година закупихме "ИЗИИНС-Първи Интренет Застраховатален Брокер"ЕООД и чрез него увеличихме набора на застрахователни продукти.

        В случай на застрахователно събитие
        ние се грижим нашите клиенти да бъдат минимално притеснени от инцидента.
        При пътно транспортно проишествир ни се обадете:
        +359(0) 888 234 454
    `;

    constructor(
        private router: Router,
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

    private buildSrc(icon) {
        return './src/img/' + icon.src
    }
}
