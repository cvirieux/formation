import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpperCasePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BasketComponent } from './basket.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { SortProductPipe } from './pipe/sort-product.pipe';

import './rxjs-operators'; //import des operateurs RxJS

import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
{ path: '', component: HomeComponent }, // path: '/'
{ path: 'basket', component: BasketComponent }

];
let titleInject: string = 'Bienvenue sur Zenika Ecommerce';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BasketComponent,
    ProductComponent,
    FooterComponent,
    SortProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService,
    CustomerService,
    UpperCasePipe,
    [{provide: 'title', useValue:titleInject}, { provide: LOCALE_ID, useValue: 'fr-FR' }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
