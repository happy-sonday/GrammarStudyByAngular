import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-map',
  templateUrl: './ex-map.component.html',
  styleUrls: ['./ex-map.component.scss'],
})
export class ExMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prices = ['1.0', '흥정가능', '2.15', '에누리없음', '3443.23'];
  formattedPrices = this.prices
    .map((price) => parseFloat(price))
    .filter((price) => price);
}
