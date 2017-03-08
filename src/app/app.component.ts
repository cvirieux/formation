import { Input, Component } from '@angular/core';
import { Product } from './model/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[];
  @Input() total : number = 0;
  constructor(){
    this.products=[]; 
    this.products.push(new Product("Product 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 10));
    this.products.push(new Product("Product 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 20));
    this.products.push(new Product("Product 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 30));
    this.products.push(new Product("Product 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 40));
  }
  updateTotal(price : number){
    this.total = this.total+price;
  }
}
