import { Component, OnInit } from '@angular/core';
import { from, range } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-trading',
  templateUrl: './rxjs-trading.component.html',
  styleUrls: ['./rxjs-trading.component.scss'],
})
export class RxjsTradingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  stratTrade() {}

  apiCall() {
    const stream = '연결';
    return from(stream);
  }
}
