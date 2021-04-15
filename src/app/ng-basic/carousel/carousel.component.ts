import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  first,
  map,
  mergeAll,
  mergeMap,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*  const $view = document.getElementById('carousel');
    const $container = $view.querySelector('.container');
    const PANEL_COUNT = $container.querySelectorAll('.panel').length;
    const SUPPORT_TOUCH = 'ontouchstart' in window;
    const EVENTS = {
      start: SUPPORT_TOUCH ? 'touchstart' : 'mousedown',
      move: SUPPORT_TOUCH ? 'touchmove' : 'mouseover',
      end: SUPPORT_TOUCH ? 'touchend' : 'mouseup',
    };

    function toPos(obs$) {
      return obs$.pipe(
        map((v) =>
          SUPPORT_TOUCH
            ? (v as TouchEvent).changedTouches[0].pageX
            : (v as MouseEvent).pageX
        )
      );
    }
    const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
    const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
    const end$ = fromEvent($view, EVENTS.end);
    const size$ = fromEvent(window, 'resize').pipe(
      startWith(0),
      map((event) => $view.clientWidth)
    );

    const drag$ = start$.pipe(
      switchMap((start: number) => {
        return move$.pipe(
          map((move: number) => move - start),
          takeUntil(end$)
        );
      }),

      share()
    );

    const drop$ = drag$.pipe(
      switchMap((drag) => {
        return end$.pipe(
          map((event) => drag),
          first()
        );
      }),

      withLatestFrom(size$)
    );

    const carousel$ = merge(drag$, drop$);
    carousel$.subscribe((v) => console.log('캐러셀 데이터확인', v)); */

    const $view = document.getElementById('carousel');
    const $container = $view.querySelector('.container');
    const PANEL_COUNT = $container.querySelectorAll('.panel').length;
    //console.log(PANEL_COUNT);
    const SUPPORT_TOUCH = 'ontouchstart' in window;
    const EVENTS = {
      start: SUPPORT_TOUCH ? 'touchstart' : 'mousedown',
      move: SUPPORT_TOUCH ? 'touchmove' : 'mouseover',
      end: SUPPORT_TOUCH ? 'touchend' : 'mouseup',
    };

    const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
    const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
    const end$ = fromEvent($view, EVENTS.end);

    const drag$ = start$.pipe(
      switchMap((start) => {
        return move$.pipe(
          map((move) => move - start),
          takeUntil(end$)
        );
      }),

      map((distance) => ({ distance })),
      share()
    );

    drag$.subscribe();

    const size$ = fromEvent(window, 'resize').pipe(
      startWith(0),
      map((event) => $view.clientWidth)
    );

    const drop$ = drag$.pipe(
      switchMap((drag) => {
        return end$.pipe(
          map((event) => drag),
          first()
        );
      }),
      withLatestFrom(size$, (drag, size) => {
        return { ...drag, size };
      })
    );

    /* function toPos(event: any) {
      return SUPPORT_TOUCH
        ? event.changedTouches[0].pageX
        : (event as MouseEvent).pageX;
    } */

    const carousel$ = merge(drag$, drop$);
    carousel$.subscribe((v) => console.log('캐러셀 데이터', v));
    function toPos(obj$: Observable<any>) {
      return obj$.pipe(
        map((v) =>
          SUPPORT_TOUCH ? v.changedTouches[0].pageX : (v as MouseEvent).pageX
        )
      );
    }
  }
}
