import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  products:Product[] = [];
  
  @Input() total : number;

  constructor(private productService : ProductService, private customerService : CustomerService, @Inject('title') public bienvenue:string){  }
  
  ngOnInit(){
    this.productService.getProducts().subscribe((prod:Product[]) => this.products = prod);
    this.customerService.getBasket()
      .switchMap(() => this.customerService.getTotal())
      .subscribe(total => this.total = total);
  }

  addToBasket(product : number){
    this.customerService.addProduct(product)
      .switchMap(() => this.customerService.getBasket())
      .switchMap(() => this.customerService.getTotal())
      .subscribe(total => this.total = total);
    
  }

  isProdAvailable(title : string) : boolean {
    return this.productService.isAvailable(title);
  }
}