import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';

let titleInject: string = 'Bienvenue sur Zenika Ecommerce';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductService,
    CustomerService,
    [{provide: 'title', useValue:titleInject}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
