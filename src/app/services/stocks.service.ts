import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com'

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root',
})
export class StocksService {

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    if (symbols) {
      return this.httpClient.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join())
    }
    return of({});
  }
}
