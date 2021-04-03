import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { of } from 'rxjs';
import { fromEvent } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  mergeAll,
  mergeMap,
  retry,
  switchAll,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-auto-complete',
  templateUrl: './rxjs-auto-complete.component.html',
  styleUrls: ['./rxjs-auto-complete.component.scss'],
})
export class RxjsAutoCompleteComponent implements OnInit {
  value: number;
  keyword: string;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    const layer = document.getElementById('suggestLayer');
    let keyword;
    function drawLayer(items: any) {
      const filteredArray = items.filter((user) =>
        user.login.includes(keyword)
      );
      console.log(filteredArray);
      layer.innerHTML = filteredArray
        .map((user) => {
          return `<li class="user">
          <img src="${user.avatar_url}" width="50px" height="50px" />
          <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
          </li>`;
        })
        .join('');
    }

    const loading = document.getElementById('loading');
    function showLoading() {
      loading.style.display = 'block';
    }

    function hideLoading() {
      loading.style.display = 'none';
    }

    //키보드 이벤트 옵저버블

    const keyup$ = fromEvent(document.getElementById('search'), 'keyup').pipe(
      debounceTime(300), //300ms뒤에 데이터를 전달
      map((event) => (<HTMLTextAreaElement>event.target).value),
      distinctUntilChanged() //동일한 데이터가 전달될 경우 이전과 다른데이터가 저달됙 전까지 데이터를 전달하지 않는 오퍼레이터
    );

    //유저 옵저버블
    const user$ = keyup$.pipe(
      filter((query) => query.trim().length > 0),
      tap(showLoading),

      /* mergeMap((query) => {
        keyword = query;
        return this._http.get<any>(`https://api.github.com/users?q=${query}`);
      }), */
      /**
       * 응답 속도차이에 의한 결과가 상이하게 나올 것을 대비
       * (예. 첫 번째 요청의 응답을 받기 전에 두번째 요청(마지막 검색 키워드)의 응답이 먼저 보여질 수 있음 )
       * 이미 요청된 request를 중지하고 새로운 request에 대한 응답을 받을 수 있도록 하는 메소드
       * 개발자 도구에서 slow 3G로 설정하고 하면 state에 cancled가 되었음을 확인할 수 있다.
       *
       *
       */
      switchMap((query) => {
        keyword = query;
        return this._http.get<any>(`https://api.github.com/users?q=${query}`);
      }),

      /**에러가 발생시 현재 Observable이나 새로운 Observable을 반환하여 재개할지 정한다
       * 서버가 끊기더라도 사용자가 최근에 입력한값을 받을 수 있도록 서버에 요청한다
       */
      /*  catchError((e, orgObservable) => {
        console.log(
          '서버 에러가 발생하였으므로 다시 호출하도록 처리',
          e.message
        );
        return orgObservable;
      }), */

      tap(hideLoading),

      /** 네트워크에 장기적으로 문제가 발생했는지 확인 후 에러 여부를 사용자에게 전달하는 게 오히려 더 합리적
       * 그래서 retry메소드에 숫자값을 인자로 전달하면 넣은 값만큼 재시도한다.
       * TODO:자동완성이므로 keyup에 의한 요청3번일 경우 alert을 확인 할 수 있다.
       */

      retry(2),

      /** 에러가 발생하거나 정상적인 종료일 경우 로딩바를 닫도록 수정
       *  일부페이지가 전환될 때까지 종료되지 않고 계속 데이터를 받는 경우도 발생할 수 있다.
       */

      finalize(hideLoading)
    );

    //공백일시 결과 form reset
    const reset$ = keyup$.pipe(
      filter((query) => query.trim().length === 0),
      tap((value) => (layer.innerHTML = ''))
    );

    user$.subscribe({
      next: (data) => drawLayer(data),
      error: (error) => {
        console.error(error);
        alert(`관리자에게 문의하시기 바랍니다.${error.message}`);
      },
    });

    reset$.subscribe();
  }

  // onKeyup(event: any) {
  //   this.user$ = of(event);
  // }
}
