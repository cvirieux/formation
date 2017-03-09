import { Injectable } from '@angular/core';
import { UpperCasePipe } from '@angular/common'

import { Product } from '../model/product';

@Injectable()
export class ProductService {
  private products : Product[];
  constructor(private upperCasePipe: UpperCasePipe) {
    this.products = [];
    
    this.products.push(new Product(upperCasePipe.transform("PlayStation 4"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 10, 10));
    this.products.push(new Product(upperCasePipe.transform("Xbox One"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 20, 1));
    this.products.push(new Product(upperCasePipe.transform("Switch"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 30, 2));
    this.products.push(new Product(upperCasePipe.transform("PC"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 40, 3));
   }
  
  getProducts(): Product[]{
    return this.products;
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
