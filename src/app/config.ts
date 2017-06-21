import { Injectable } from '@angular/core';

@Injectable()
// Will contain all of the urls and constants of the app
export class Config {
    // language
    public static get defaultLang():string { return 'bg'; }
    public static get languages():Array<string> { return ['bg', 'en']; }
    // urls
    public static get pagesUrl():string { return "http://61148759.ngrok.io/api/pages"; }

    // production
    // public static get productsAndCategoriesUrl():string { return "http://194.79.15.134:8080/api/productsAndCategories"; }
    // public static get categoriesUrl():string { return "http://194.79.15.134:8080/api/categories"; }
    // public static get productsUrl():string { return "http://194.79.15.134:8080/api/products"; }
    // public static get messageUrl():string { return "http://194.79.15.134:8080/api/message"; }
    // public static get orderUrl():string { return "http://194.79.15.134:8080/api/order"; }
    // public static get adminLoginUrl():string { return "http://194.79.15.134:8080/api/admin/login"; }


    public static get mapCoordinates():Object { return { lat: 42.7003, lng: 23.3366024, zoom: 15 }; }
}
