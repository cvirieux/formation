import { Injectable } from '@angular/core';
import { UpperCasePipe } from '@angular/common'
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
 
import {Observable} from 'rxjs/Observable';

import { Product } from '../model/product';

@Injectable()
export class ProductService {
  private products : Product[] = [];
  constructor(private upperCasePipe: UpperCasePipe, private http : Http) {}
  
  getProducts():  Observable<Product[]>{
    return this.http.get('http://localhost:8080/rest/products')
      .map((result:Response) => result.json())
      .map(json => json.map(item => Product.create(item)))
      .map(products => {
        return products.map(product => {
          product.title = this.upperCasePipe.transform(product.title);
          return product;
        });
      })
      .map(products => this.products = products);
  }

  getProductByName(name : string): Product{
    return this.products.find(x => x.title === name);
  }

  isTheLast(produitTitle): boolean{
    if(this.getProductByName(produitTitle).stock === 1){
      return true;
    }else{
      return false;
    }
  }

  isAvailable(produitTitle) : boolean{
    if(this.getProductByName(produitTitle).stock != 0){
      return true;
    }else{
      return false;
    }
  }
  
  decreaseStock(produitTitle)  : void{
    this.getProductByName(produitTitle).stock--;
  }
  

}
