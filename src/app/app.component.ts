import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { JoinPipe } from './join.pipe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    PercentPipe,
    CurrencyPipe,
    JoinPipe,
  ],
})
export class AppComponent {
  title = 'angular10-lecture6-work2';
  myDate = new Date(1961, 3, 12);
  welcome: string = 'Hello World!';
  pi: number = 3.1415;
  persentage: number = 0.14;
  money: number = 23.45;
  mass: Array<number> = [1, 2, 3, 4, 5];
  phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];
  phone: Observable<string>;
  constructor(
    private date: DatePipe,
    private upperCase: UpperCasePipe,
    private lowerCase: LowerCasePipe,
    private slice: SlicePipe,
    private perscent: PercentPipe,
    private currency: CurrencyPipe,
    private join: JoinPipe
  ) {
    this.showPhones();
  }

  get dateEx1(): string {
    return this.date.transform(this.myDate, 'dd/MM/yyyy');
  }

  get uppercaseEx(): string {
    return this.upperCase.transform(this.welcome);
  }

  get lowercaseEx(): string {
    return this.lowerCase.transform(this.welcome);
  }

  sliceEx1(start: number, end?: number): string {
    return this.slice.transform(this.welcome, start, end);
  }

  get currencyEx(): string {
    return this.currency.transform(this.money, 'RUB', 'symbol-narrow');
  }

  get joinEx(): string {
    return this.join.transform(this.mass, ',');
  }

  showPhones() {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }
}
