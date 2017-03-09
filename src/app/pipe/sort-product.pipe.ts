import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';


@Pipe({
  name: 'sortProduct',
  pure:false
})
export class SortProductPipe implements PipeTransform {

  transform(value: Product[], args?: any): Product[] {
    return value.sort(function(a: Product, b: Product){
      if(a[args]<b[args]){
        return -1;
      }
      if(a[args]>b[args]){
        return 1
      }
      else{
        return 0;
      }
    });

  }
}
