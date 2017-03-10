import { Component, OnInit, Input } from '@angular/core';
import { Product } from './model/product';
import { Customer } from './model/customer';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-basket',
    templateUrl: 'basket.component.html'
})
export class BasketComponent implements OnInit {
    basket:Product[] = [];
    customer:Customer;
    constructor(private customerService:CustomerService, private router:Router) { }

    ngOnInit() {
        this.customerService.getBasket().subscribe((prod:Product[]) => this.basket = prod);
        this.customer = new Customer('','','');
     }
     onSubmit(myForm){
        this.customer.name = myForm.name;
        this.customer.address = myForm.address;
        this.customer.creditCard = myForm.creditCard;
        this.customerService.checkout(this.customer).subscribe(() =>{
            this.router.navigate(['']);
        });
     }
}