import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentval'
})
export class InvestmentvalPipe implements PipeTransform {

  transform(value: number,stockpurchaseprice:number) {
    return (value*stockpurchaseprice);
  }

}
