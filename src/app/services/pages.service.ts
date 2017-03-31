import { Injectable, EventEmitter } from '@angular/core';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end for the drivers
 */
export class PagesService {
    // will be used when we have live update of products and everything is dynamic
    public productsUpdate: EventEmitter<any>;

    private pages = Array<Object>();
    /**
    * @getPages get all pages
    * @return {Array} all pages
    */
    public getPages() {
        return this.pages;
    }

    public setPages(products) {
        this.pages = products;
        // todo: emit that pages are changed
    }

    constructor() {
        
    }
}
