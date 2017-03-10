import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs';
 
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  myProducts : Product[] = [];
  constructor(private http : Http) { }

  addProduct(product):Observable<Response>{
    return this.http.post('http://localhost:8080/rest/basket', product);
    
  }

  getBasket() : Observable<Product[]>{
    return this.http.get('http://localhost:8080/rest/basket')
      .map((result:Response) => result.json())
      .map(json => json.map(item => Product.create(item)))
      .map(products => this.myProducts = products);
  }
  getTotal(): Observable<number> {
    const basketObs = this.myProducts.length ? Observable.of(this.myProducts) : this.getBasket();

    return basketObs.map(() => {
        let total : number = 0;
        for (let prod of this.myProducts) {
          total = total + prod.price;
        }
        return total;
    })
  }
  checkout(customer):Observable<Response>{
    return this.http.post('http://localhost:8080/rest/basket/confirm', customer);
  }
}
