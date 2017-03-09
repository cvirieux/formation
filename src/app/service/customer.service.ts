import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class CustomerService {

  myProducts : Product[] = [];
  constructor() { }

  addProduct(product):void{
    this.myProducts.push(product);
  }

  getTotal(): number {

    let total : number = 0;
    for (let prod of this.myProducts) {
      total = total + prod.price;
    }
    return total;
  }
}
