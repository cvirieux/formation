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
export class AppComponent implements OnInit {
  products:Product[] = [];
  basket:Product[] = [];
  @Input() total : number = 0;

  constructor(private productService : ProductService, private customerService : CustomerService, @Inject('title') public bienvenue:string){  }
  
  ngOnInit(){
    this.productService.getProducts().subscribe((prod:Product[]) => this.products = prod);
    
  }

  updateTotal(product : number){
    this.customerService.addProduct(product)
      .switchMap(() => this.customerService.getBasket().map((prod:Product[]) => this.basket = prod))
      .subscribe(() => this.total = this.customerService.getTotal(this.basket));
    
  }

  isProdAvailable(title : string) : boolean {
    return this.productService.isAvailable(title);
  }
}
