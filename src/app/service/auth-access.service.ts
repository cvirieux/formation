import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import {CustomerService} from './customer.service';
import {Product} from '../model/product';

@Injectable()
export class AuthAccessService implements CanActivate {
    
    constructor(private router: Router, private customerService:CustomerService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let basket : Product[];
        let ret : boolean
        this.customerService.getBasket().map(products => basket = products).subscribe(() => {
            if(basket.length){
                ret = true;
            }else{
                ret = false;
            }
        })
        
        
    }
       
}
