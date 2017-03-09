import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  private products : Product[];
  constructor() {
    this.products = [];
    this.products.push(new Product("Product 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 10, 0));
    this.products.push(new Product("Product 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 20, 1));
    this.products.push(new Product("Product 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 30, 2));
    this.products.push(new Product("Product 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 40, 3));
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
