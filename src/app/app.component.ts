import { Input, Component, OnInit, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(){  }
  
 
}
