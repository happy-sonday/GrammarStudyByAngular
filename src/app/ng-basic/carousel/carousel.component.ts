import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  first,
  map,
  mergeAll,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const $view = document.getElementById('carousel');

    /**드래그 시점과 거리차를 얻기위해 패널의 넓이를 구함,하지만 브라우저 크기가 바뀔때마다 넓이가 변겨오디므로 값들을 갱신해야 한다. */
    /**하지만 다른 곳에서 쉽게 접근하고 변결할 수 있는 위허성이 있기때문에 외부에 노출된 변수 사용을 지양하자 */
    //let viewWidth = $view.clientHeight;
    /**window의 resize 이벤트를 Observable로 만들어 패널의 넓이를 전달받는다. */
    const size$ = fromEvent(window, 'resize').pipe(
      map((event) => $view.clientWidth)
    );
    //size$.subscribe(console.log);

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
    //start$.subscribe(console.log);

    /**마우스 또는 터치 hover시 x축 방향 위치 값 확인이 가능 */
    const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
    //move$.subscribe(console.log);
    const end$ = fromEvent($view, EVENTS.end);

    /** 해당 container 위에 마우스를 올리면 console에서 위치값을 읽는다. */
    const drag$ = start$.pipe(
      //map((start) => move$.pipe(takeUntil(end$))),
      //mergeAll()

      /**마우스 버튼을 누르는 순간부터 버튼을 뗄 때까지의 마우스 이동거리 차가 데이터로 전달 */
      switchMap((start: number) => {
        return move$.pipe(
          map((move: number) => move - start),
          takeUntil(end$)
        );
      })
    );

    // drag$.subscribe((distance) =>
    //   console.log('start$ 와 move$의 차이 값', distance)
    // );

    /** 캐러셀에서 드래그 이후 마우스를 버튼을 떼는 행위를 드롭이라고 한다. 반드시 마우스 버튼을 딱한번 떼었을 때를 이야기한다. */
    /**take 첫번째 인자로 전달하는 데이터의 개수를 전달받아 해당 개수째에서 상태를 종료처리하고 자동으로 구독 해제한다. 동일하게 first() 오펄이트 사용이 가능 */
    /** 참고 직접적으로 구독을 해제(unscribe)하지 말고 takeUntil,take,first 오퍼레이터를 이용하여 자동으로 구독해제한다. */
    //const drop$ = drag$.pipe(map((drag) => end$.pipe(take(1))));

    const drop$ = drag$.pipe(switchMap((drag) => end$.pipe(first())));
    drop$.subscribe(console.log);
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
