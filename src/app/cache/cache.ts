import { Injectable } from '@angular/core';
import { Pages } from './pages';

@Injectable()
export class Cache {
    // the variables containing the language jsons
    // will contain the default language
    private language: string = ''; 
    // will return the texts from witch we fill our forms
    public getPages() {
        return this.pages.cache
    };

    constructor(private pages: Pages) {};
}