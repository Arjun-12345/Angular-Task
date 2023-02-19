import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommendation'
})
export class RecommendationPipe implements PipeTransform {
 
  
  transform(value: any, stockpurchaseprice:number,stockcurrentprice:number ) {
      //buyMore when loss>20%
      //Hold when profit or loss is between 0 and 15%
      //Sell when profit is more than 20% or loss is more than 40%
      if(stockcurrentprice>stockpurchaseprice)
      {
        if((stockcurrentprice-stockpurchaseprice)> (stockpurchaseprice * 20 / 100))
        {
          return 'Sell';//profit more than 20%
        }
        else if((stockcurrentprice-stockpurchaseprice)<(stockpurchaseprice * 15 / 100))
        {
          return 'Hold';//profit less than 15%
        } 
        else{
          return 'BuyMore';//profit between 15-20 %
        }
      }
      else if (stockpurchaseprice==stockcurrentprice){
        return 'Hold';//no profit/no loss
      }
      else{
        if( (stockpurchaseprice-stockcurrentprice)>(stockpurchaseprice * 40 / 100) ){
          return 'Sell';//loss more than 40%
        }
        else if((stockpurchaseprice-stockcurrentprice)>(stockpurchaseprice * 20 / 100))
        {
          return 'BuyMore';//loss more than 20% but less than 40%
        }
        else
          return 'Hold';
      }
  }

}
