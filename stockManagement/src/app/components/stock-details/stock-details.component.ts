import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
      stockDetails=[
        { stockId:501, stockName:'Tata Motors',stockIndustry:'Automobiles',stockPurchasePrice:100,stockCurrentPrice:200,stockQty:200},
        { stockId:502, stockName:'Reliance Industries',stockIndustry:'Telecom',stockPurchasePrice:260,stockCurrentPrice:200,stockQty:100},
        { stockId:503, stockName:'Cognizant',stockIndustry:'IT',stockPurchasePrice:3100,stockCurrentPrice:4000,stockQty:60},
        { stockId:504, stockName:'Adani Power',stockIndustry:'Power',stockPurchasePrice:100,stockCurrentPrice:300,stockQty:170},
        { stockId:505, stockName:'HDFC Bank',stockIndustry:'Bank',stockPurchasePrice:1000,stockCurrentPrice:1500,stockQty:80},
        { stockId:506, stockName:'Tech Mahindra',stockIndustry:'IT',stockPurchasePrice:600,stockCurrentPrice:590,stockQty:60},
        { stockId:507, stockName:'SBI',stockIndustry:'Bank',stockPurchasePrice:300,stockCurrentPrice:330,stockQty:70},
        { stockId:508, stockName:'Polycab India',stockIndustry:'Electricals',stockPurchasePrice:520,stockCurrentPrice:500,stockQty:90},
        { stockId:509, stockName:'Zomato',stockIndustry:'Food',stockPurchasePrice:50,stockCurrentPrice:45,stockQty:120},
        { stockId:510, stockName:'Airtel',stockIndustry:'Telecom',stockPurchasePrice:500,stockCurrentPrice:650,stockQty:230}

      ]
}
