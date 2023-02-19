import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { InvestmentvalPipe } from './pipes/investmentval.pipe';
import { CurrentvalPipe } from './pipes/currentval.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { RecommendationPipe } from './pipes/recommendation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    InvestmentvalPipe,
    CurrentvalPipe,
    StatusPipe,
    RecommendationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
