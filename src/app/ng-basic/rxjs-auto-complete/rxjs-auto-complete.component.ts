import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { of } from 'rxjs';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeAll,
  mergeMap,
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

      mergeMap((query) => {
        keyword = query;
        return this._http.get<any>(`https://api.github.com/users?q=${query}`);
      }),

      tap(hideLoading)
    );

    //공백일시 결과 form reset
    const reset$ = keyup$.pipe(
      filter((query) => query.trim().length === 0),
      tap((value) => (layer.innerHTML = ''))
    );

    user$.subscribe((data) => drawLayer(data));

    reset$.subscribe();
  }

  // onKeyup(event: any) {
  //   this.user$ = of(event);
  // }
}
