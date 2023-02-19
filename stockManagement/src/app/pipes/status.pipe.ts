import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, stockpurchaseprice:number,stockcurrprice:number): unknown {
    if( (value*stockpurchaseprice)< (value*stockcurrprice) ){
      return "Profit";
    }
    else
      return "Loss";
  }

}
