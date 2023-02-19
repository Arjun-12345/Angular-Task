import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentval'
})
export class CurrentvalPipe implements PipeTransform {

  transform(value: number, stockcurrentprice:number ) {
    return value*stockcurrentprice;
  }

}
