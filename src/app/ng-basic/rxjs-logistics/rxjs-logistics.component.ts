import { Component, OnInit } from '@angular/core';
import { from, merge, Observable } from 'rxjs';
import { interval, of } from 'rxjs';
import {
  delay,
  tap,
  take,
  concatAll,
  map,
  mergeAll,
  reduce,
  bufferCount,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-logistics',
  templateUrl: './rxjs-logistics.component.html',
  styleUrls: ['./rxjs-logistics.component.scss'],
})
export class RxjsLogisticsComponent implements OnInit {
  deliveries = interval(1000).pipe(take(1000));

  openBox(delivery) {
    of(delivery).pipe(
      delay(3000),
      tap((delivery) => console.log(delivery + ' 를 열었습니다..'))
    );
  }

  checkProduct(delivery) {
    of(delivery).pipe(
      delay(3000),
      tap((delivery) => console.log(delivery + ' 를 검사합니다..'))
    );
  }

  useProduct(delivery) {
    of(delivery).pipe(
      delay(3000),
      tap((delivery) => console.log(delivery + ' 를 사용합니다.'))
    );
  }

  doTask(delivery): Observable<any> {
    const tasks = from([
      this.openBox(delivery),
      this.checkProduct(delivery),
      this.useProduct(delivery),
    ]);

    return tasks.pipe(
      reduce((accu, data) => {
        return delivery;
      })
    );
  }

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.deliveries
      .pipe(
        map((data) => this.doTask(data)),
        mergeAll(3),
        bufferCount(10),
        tap(console.log)
      )
      .subscribe();
  }
}
