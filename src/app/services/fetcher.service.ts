import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end
 */
export class FetcherService {

    public getPages() {
        return this.http.get( Config.pagesUrl );
    }

    constructor( private http: Http ) {}
}
