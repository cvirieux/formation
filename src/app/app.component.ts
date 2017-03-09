import { Input, Component, OnInit, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products:Product[];
  @Input() total : number = 0;
  
  constructor(private productService : ProductService, private customerService : CustomerService, @Inject('title') public bienvenue:string){  }
  
  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  updateTotal(product : number){
    this.customerService.addProduct(product);
    this.total = this.customerService.getTotal();
  }
}
