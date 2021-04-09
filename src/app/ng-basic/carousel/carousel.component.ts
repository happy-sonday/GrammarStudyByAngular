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
    const start$ = fromEvent($view, EVENTS.start).pipe(toPos);

    start$.subscribe(console.log);

    /**마우스 또는 터치 hover시 x축 방향 위치 값 확인이 가능 */
    const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
    move$.subscribe(console.log);
    const end$ = fromEvent($view, EVENTS.end);

    /** 해당 container 위에 마우스를 올리면 console에서 위치값을 읽는다. */
    const drag$ = start$.pipe(
      //map((start) => move$.pipe(takeUntil(end$))),
      //mergeAll()
      switchMap((start) => move$.pipe(takeUntil(end$)))
    );

    /** start와 ends 중복 map을 사용하여 자기자신을 반화하는 observable 함수를 콜백으로 사용 */
    function toPos(obs$) {
      return obs$.pipe(
        map((v) =>
          SUPPORT_TOUCH
            ? (v as TouchEvent).changedTouches[0].pageX
            : (v as MouseEvent).pageX
        )
      );
    }
  }
}
