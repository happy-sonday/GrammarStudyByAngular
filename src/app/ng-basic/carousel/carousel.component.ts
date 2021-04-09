import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
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

    const $container = $view.querySelector('.container');
    const PANEL_COUNT = $container.querySelectorAll('.panel').length;
    console.log(PANEL_COUNT);

    const SUPPORT_TOUCH = 'ontouchstart' in window;

    /**rxjs 관점에서 이벤트 데이터는 사용자의 입력이 데이터 소스이기때문에 observable로 만들 수 있다.
    즉 mousedown, mouseup, mousemove는 이벤트 데이터 소스이다**/
    const EVENTS = {
      start: SUPPORT_TOUCH ? 'touchstart' : 'mousedown',
      move: SUPPORT_TOUCH ? 'touchmove' : 'mouseover',
      end: SUPPORT_TOUCH ? 'touchend' : 'mouseup',
    };

    /**마우스 또는 터치 시작 위치 값 */
    const start$ = fromEvent($view, EVENTS.start).pipe(
      map((event) =>
        SUPPORT_TOUCH
          ? (event as TouchEvent).changedTouches[0].pageX
          : (event as MouseEvent).pageX
      )
    );

    start$.subscribe(console.log);

    /**마우스 또는 터치 hover시 x축 방향 위치 값 확인이 가능 */
    const move$ = fromEvent($view, EVENTS.move).pipe(
      map((event) =>
        SUPPORT_TOUCH
          ? (event as TouchEvent).changedTouches[0].pageX
          : (event as MouseEvent).pageX
      )
    );
    move$.subscribe(console.log);
    const end$ = fromEvent($view, EVENTS.end);

    /** 해당 container 위에 마우스를 올리면 console에서 위치값을 읽는다. */
    const drag$ = start$.pipe(
      //map((start) => move$.pipe(takeUntil(end$))),
      //mergeAll()
      switchMap((start) => move$.pipe(takeUntil(end$)))
    );

    //drag$.subscribe(console.log);

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

    /** 드래그를 구현하기 위한 마우스 위치 차이 값 */
    // const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
    // const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
    // const end$ = fromEvent($view, EVENTS.end).pipe(toPos);

    /** start가 발생할 때마다 move$가 생성되므로 기존데이터를 종료하기 위해 switchMap으로 바꿈 */
    // const drag$ = start$.pipe(
    //   switchMap((start: number) => {
    //     return move$.pipe(
    //       map((move: number) => {
    //         move - start;
    //       }, takeUntil(end$))
    //     );
    //   })
    // );

    // function toPos(obs$) {
    //   return obs$.pipe(
    //     map((v: any) => {
    //       SUPPORT_TOUCH ? v.changedTouches[0].pageX : v.pageX;
    //     })
    //   );
    // }

    // drag$.subscribe((distance) => {
    //   console.log(`start 와 move 차이 값은 ${distance}`);
    // });
  }
}
