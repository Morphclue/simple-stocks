import {Component} from '@angular/core';
import {StocksService, StockInterface} from "./services/stocks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-stocks';
  stocks = Array<StockInterface>();

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe((stocks: any) => {
      this.stocks = stocks;
    })
  }
}
