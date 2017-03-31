import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../services/pages.service';
import { Dictionary } from '../../dictionary/dictionary.service';
import { EventEmiterService } from '../../services/event.emiter.service';

// import { DateComponent } from '../date/date.component';

@Component({
    selector: 'custom-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    private pages:Array<Object>;

    private navigationItems:Array<Object>;

    constructor(
        private router: Router,
        private dictionary: Dictionary,
        private pagesService: PagesService,
        private eventEmiterService: EventEmiterService
    ) {
      this.pages = pagesService.getPages();
      this.updatePagesIndex();
      // on categories update we update the local array
      this.eventEmiterService.dataFetched.subscribe(data => this.onFetchedData(data));
    };

    private onFetchedData(data) {
      this.pages = data.pages;
      this.updatePagesIndex();
    }

    private changeLanguage() {
      this.dictionary.changeLanguage();
    }

    private updatePagesIndex(){
      let array = [];
      for(let pagesCounter = 0; pagesCounter < this.pages.length; pagesCounter++) {
        if(this.pages[pagesCounter]['type'] == 'single') {
          array[+this.pages[pagesCounter]['zIndex']] = this.pages[pagesCounter];
        } else if(this.pages[pagesCounter]['type'] == 'multiple') {
          this.pages[pagesCounter]['sub'] = this.getSubCategories(this.pages[pagesCounter]['subCategories']);
        }
      }
  }
  
  private getSubCategories(subCategoriesArray) {
    let subs = [];
    for(let categoriesCounter = 0; categoriesCounter < subCategoriesArray.length; categoriesCounter++) {
      for(let pagesCounter = 0; pagesCounter < this.pages.length; pagesCounter++) {
        if(this.pages[pagesCounter]['link'] == subCategoriesArray[categoriesCounter]) {
          subs.push(this.pages[pagesCounter]);
        }
      }
    }
    return subs;
  }
}
