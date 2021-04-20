import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, pipe, range, timer } from 'rxjs';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import {
  tap,
  map,
  filter,
  take,
  concatAll,
  mergeMap,
  mergeAll,
} from 'rxjs/operators';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.observableTest();
    // this.observableFrom();
    // this.clickEvent();
    //this.testConcatAll();
    //this.testMergeAll();
    //this.testMergeMap();

    //this.isEvenTest();
    //this.basicMergeMap();
    this.arrayMergeMap();
  }

  basicMap(): void {
    const source$ = from([1, 2, 3, 4, 5]);
    const resultSources$ = source$.pipe(
      map((x) => x + 1),
      map((x) => x * 2)
    );

    resultSources$.subscribe((x) => console.log(x));
  }

  isEvenTest(): void {
    const source$ = range(0, 5).pipe(map((x) => ({ x, isEven: x % 2 === 0 })));

    source$.subscribe((res) =>
      console.log(`${res.x}는 ${res.isEven ? '짝수' : '홀수'} 입니다.`)
    );
  }

  basicMergeMap(): void {
    const request = [
      timer(Math.floor(Math.random() * 2000)).pipe(map((value) => 'req1')),
      timer(Math.floor(Math.random() * 1000)).pipe(map((value) => 'req2')),
      timer(Math.floor(Math.random() * 1500)).pipe(map((value) => 'req3')),
    ];

    //range에 대한 범위 옵접버블의 결과값을 발행하여x에 넣고 이중으로 또 구독을해서 request 배열에 인덱스값을 넣어 log를 출력하고 있다
    // range(0, 3).subscribe((x) =>
    //   request[x].subscribe((req) => console.log(`response from ${req}`))
    // );

    range(0, 3)
      .pipe(mergeMap((x) => request[x]))
      .subscribe((x) => console.log(`response from ${x}`));
  }

  arrayMergeMap(): void {
    range(0, 3)
      .pipe(mergeMap((x) => [x + 1, x + 2, x + 3, x + 4]))
      .subscribe((value) => console.log(`current value: ${value}`));
  }

  //next 데이터 스트림 처리 .필수
  //complete 옵저버블 종료 후 처리하느 핸들러. 옵션
  //error 에러 스트림이 전달되면 처리하는 핸들러

  //Observable 인스턴스를 생성하는 방법은 일반적으로 of()와 from()메소드가 있다.
  //of(array) - 배열 항목을 하나씩 전달
  //from(iterable) = 배열을 옵저버블로 변환할 때 자주 사용
  //Observable 인스턴스로 구독해야 데이터를 감지할 수 있는데 subscribe()함수를 실행하면 된다.

  observableTest(): void {
    //3개의 값을 전달하도록 옵저버블을 간단하게 정의
    const myObservable = of(1, 2, 3, 4, 5, 6, 7);

    //옵저버 객체를 정의
    const myObserver = {
      next: (x) => {
        console.log('옵저버블 next value:' + x);
      },
      error: (err) => console.error('에러발생: ' + err),
      complete: () => console.log('모든 데이터 발행 끝'),
    };
    // 옵저버 객체를 실행합니다.
    myObservable.subscribe(myObserver);
  }

  observableFrom(): void {
    const stream = from([1, 2, 3, 4, 23, 10, 2, 3, 40, 54]);

    /**tap 연습 */
    //stream.pipe(tap((data) => console.log('읽는중:' + data))).subscribe();

    /**filter */
    //stream.pipe(filter((data) => data > 3)).subscribe(console.log);
    const squreOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map((n) => n * n)
    );
    const squareOdd = squreOddVals(stream);
    squareOdd.subscribe((data) => console.log(data));

    /** map */
    //원래의 옵저버블 데이터를 변환 변환된 값을 새로운 옵저버블에 전달
    //stream.pipe(map((data) => data * data)).subscribe(console.log);
  }

  clickEvent(): void {
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap((ev) => console.log(ev)),
      map((ev: PointerEvent) => ev.clientX)
    );
    positions.subscribe((x) => console.log(x));
  }

  testConcatAll(): void {
    const stream1 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`첫번째 데이터 스트림 데이터${data}`))
    );
    const stream2 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`두번째 데이터 스트림 데이터${data * 3}`))
    );

    const stream3 = of(stream1, stream2);

    //stream3.subscribe(console.log);
    stream3.pipe(concatAll()).subscribe();
  }

  //mergeMap

  testMergeMap(): void {
    //1초에 한번씩 오는 택배 스트림: 10개까지
    const stream = interval(1000).pipe(
      take(3),
      map((data) => `택배${data + 1}`)
    );

    stream.pipe(mergeMap((data) => from(this.userTask(data)))).subscribe();
  }

  openBox(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data, '상품 개봉');
        resolve(data);
      }, 5000);
    });
  }

  checkBox(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data, '상품 검사');
        resolve(data);
      }, 5000);
    });
  }

  useGoods(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data, '상품 사용');
        resolve(data);
      }, 5000);
    });
  }

  async userTask(data) {
    await this.openBox(data);
    await this.checkBox(data);
    await this.useGoods(data);
  }

  testMergeAll() {
    const stream1 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`첫번째 데이터 스트림 데이터${data}`))
    );
    const stream2 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`두번째 데이터 스트림 데이터${data * 3}`))
    );
    const stream3 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`세번째 데이터 스트림 데이터${data}`))
    );
    const stream4 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`네번째 데이터 스트림 데이터${data * 3}`))
    );
    const stream5 = interval(1000).pipe(
      take(3),
      tap((data) => console.log(`다섯번째 데이터 스트림 데이터${data * 3}`))
    );

    const streamAll = of(stream1, stream2, stream3, stream4, stream5);

    //동시에 반환되는 stream 갯수를 정해서 출력된다.
    streamAll.pipe(mergeAll(2)).subscribe();
  }
}
