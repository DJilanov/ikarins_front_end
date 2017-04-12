// Angular 2 Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Standard Views
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: {
      meta: {
        title: 'Компютърни компоненти Жиланов: евтини РАМ(RAM) памети, видеонаблюдение, твърд диск и видеокарти',
        description: 'Изберете от десетките видове RAM памети, хард дискове и компютърни части на промоционалните ни цени!'
      }
    }
  }, { 
    path: 'insurance/:insurance', 
    component: PageComponent,
    data: {
      meta: {
        description: 'Изберете от десетките видове RAM памети, хард дискове и компютърни части на промоционалните ни цени!'
      }
    }
  }, { 
    path: 'blog/:blogLink', 
    component: DetailsComponent,
    data: {
      meta: {
        description: 'Изберете от десетките видове RAM памети, хард дискове и компютърни части на промоционалните ни цени!'
      }
    }
  }, { 
    path: 'contacts', 
    component: ContactsComponent,
    data: {
      meta: {
        title: 'Връзка с Жиланов ЕООД',
        description: 'Можете да се свържете с нас на телефон 0878466180 или чрез контактната форма'
      }
    }
  }, { 
    path: '**', 
    component: PageNotFoundComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);