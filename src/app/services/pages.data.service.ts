import { Injectable, EventEmitter } from '@angular/core';

import { Config } from '../config';

@Injectable()

export class PagesDataService {
    // will be used when we have live update of products and everything is dynamic
    public productsUpdate: EventEmitter<any>;

    private pagesData = Array<Object>();
    /**
    * @getPagesData get all pages
    * @return {Array} all pages
    */
    public getPagesData() {
        return this.pagesData;
    }

    public setPagesData(pagesData) {
        this.pagesData = pagesData;
        // todo: emit that pagesData are changed
    }

    constructor() {
        
    }
}
