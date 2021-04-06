import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, mergeAll, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const $view = document.getElementById('carousel');

    const $container = document.querySelector('.container');
    const PANEL_COUNT = $container.querySelectorAll('.panel').length;

    const SUPPORT_TOUCH = 'ontouchstart' in window;

    /**rxjs 관점에서 이벤트 데이터는 사용자의 입력이 데이터 소스이기때문에 observable로 만들 수 있다.
    즉 mousedown, mouseup, mousemove는 이벤트 데이터 소스이다**/
    const EVENTS = {
      start: SUPPORT_TOUCH ? 'touchstart' : 'mousedown',
      move: SUPPORT_TOUCH ? 'touchmove' : 'mouseover',
      end: SUPPORT_TOUCH ? 'touchend' : 'mouseup',
    };

    const start$ = fromEvent($view, EVENTS.start);
    const move$ = fromEvent($view, EVENTS.move);
    const end$ = fromEvent($view, EVENTS.end);

    /**드래그 이벤트 */
    //const drag$ = start$.pipe(map((start$) => move$));

    /**end$이벤트가 발생하면 move$ Obsevable을 중지
     * 전달된 첫번째 Observable 데이터가 발생하는 순간 대상 Observable 사앹를 종료처리하고 unscribe
     */
    // const drag$ = start$.pipe(map((start$) => move$.pipe(takeUntil(end$))));
    /** 두 Observable을 평탕화 */
    // const drag$ = start$.pipe(
    //   map((start$) => move$.pipe(takeUntil(end$))),
    //   mergeAll()
    // );

    /** start가 발생할 때마다 move$가 생성되므로 기존데이터를 종료하기 위해 switchMap으로 바꿈 */
    const drag$ = start$.pipe(
      switchMap((start$) => move$.pipe(takeUntil(end$)))
    );
  }
}
