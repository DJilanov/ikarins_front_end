// Angular 2 Modules
import 'hammerjs';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AgmCoreModule } from '@agm/core';
import { RatingModule } from "ngx-rating";
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, Validators }   from '@angular/forms';

// Router
import { routing, appRoutingProviders } from './app.routing';

// Language 
import { Dictionary } from './dictionary/dictionary.service';
import { EnglishDictionary } from './dictionary/en.dictionary';
import { BulgarianDictionary } from './dictionary/bg.dictionary';


// Basic Components
import { PriceComponent } from './basic_components/price/price.component';
import { ImageComponent } from './basic_components/image/image.component';
import { HeaderComponent } from './basic_components/header/header.component';
import { NotificationComponent } from './basic_components/notification/notification.component';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';

// Config
import { Config } from './config';

// Cache
import { Cache } from './cache/cache';
import { Pages } from './cache/pages';

// Services
import { PagesService } from './services/pages.service';
import { FetcherService } from './services/fetcher.service';
import { PagesDataService } from './services/pages.data.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';

@NgModule({
    // Modules & Libs
    imports: [
        routing,
        HttpModule,
        FormsModule,
        RatingModule,
        BrowserModule,
        Ng2Webstorage,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDBbPzFEwNVTHNoZ-bz7YYqO1eMRPqTyUA'
        })
    ],
    // Components & Views
    declarations: [
        // standard components
        AppComponent,
        ImageComponent,
        PriceComponent,
        HeaderComponent,
        NotificationComponent,
        // SideMenuComponent,
        // views
        HomeComponent,
        PageComponent,
        SearchComponent,
        DetailsComponent,
        ContactsComponent,
        PageNotFoundComponent,
    ],
    // Bootstraping
    bootstrap: [ 
        AppComponent 
    ],
    // Services
    providers: [
        // config of the app
        Config,
        // router of the app
        appRoutingProviders,
        // languages
        Dictionary,
        EnglishDictionary,
        BulgarianDictionary,
        // cache
        Cache,
        Pages,
        // services of the app
        PagesService,
        FetcherService,
        PagesDataService,
        EventEmiterService,
        ErrorHandlerService
    ]
})

export class AppModule { }