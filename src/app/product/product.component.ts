import { Input,Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product;
  @Output() addToBasketEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) {  }

  addToBasket():void{
    this.productService.decreaseStock(this.product.title);
    this.addToBasketEvent.emit(this.product);
  }

  ngOnInit() {
  }

  isLast():boolean{
   return this.productService.isTheLast(this.product.title);
  }
}
