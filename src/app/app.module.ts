import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpperCasePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { SortProductPipe } from './sort-product.pipe';

let titleInject: string = 'Bienvenue sur Zenika Ecommerce';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    SortProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
