import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Dictionary } from '../../dictionary/dictionary.service';
import { FetcherService } from '../../services/fetcher.service';
import { EventEmiterService } from '../../services/event.emiter.service';

import { Config } from '../../config';

// import { DateComponent } from '../date/date.component';

@Component({
    selector: 'contacts',
    styleUrls: ['./contacts.component.css'],
    templateUrl: './contacts.component.html'
})

export class ContactsComponent {

    private mapCoordinates = Config.mapCoordinates;
    private starsCount: number = 4.6;

    constructor(
        private dictionary: Dictionary,
        private fetcherService: FetcherService,
        private eventEmiterService: EventEmiterService
    ) {}
}
