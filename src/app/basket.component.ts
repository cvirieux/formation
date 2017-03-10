import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-basket',
    templateUrl: 'basket.component.html'
})
export class BasketComponent implements OnInit {
    basket:Product[] = [];
    constructor(private customerService:CustomerService) { }

    ngOnInit() {
         this.customerService.getBasket().subscribe((prod:Product[]) => this.basket = prod);
     }
}