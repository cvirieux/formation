import { Input,Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product;
 
  @Output() addToBasketEvent = new EventEmitter<number>();
  constructor() { 

  }
  addToBasket():void{
    this.addToBasketEvent.emit(this.product.price);
  }
  ngOnInit() {
  }

}
