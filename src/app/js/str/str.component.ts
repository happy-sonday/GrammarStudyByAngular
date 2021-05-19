import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-str',
  templateUrl: './str.component.html',
  styleUrls: ['./str.component.scss'],
})
export class StrComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let kim = 'Kim';

    console.log('one of All'.indexOf('f')); //공백도 인덱스위치에 포함하여 5결과 위치가 출력
    console.log('one of All'.indexOf('All')); //배열과 다르게 하나의 문장에서 단어단위로 검색이 가능하며 검색된 값 중, 제일 앞 인덱스 값 반환

    console.log('    okay  awesome \n '.trim());

    console.log('12'.padStart(3, '0')); //3자리 수의 000을 만듦
    console.log('9'.padStart(3, '0')); //3자리 수의 000을 만듦

    console.log(this._max(4, 1, 8, -2));

    console.log(Math.floor(Math.random() * 10));

    //연습문제
    console.log(this._sum(this._rage(5, 2, -1)));

    //배열의 순서 변경
    this._reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  private _max(...numbers): any {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }

  //JSON 파일에 데이터를 저장하거나 네트워크를 통해 다른 컴퓨터로 보내려면 메모리 주소를 저장하거나 전송할 수 있는 형식으로 변환해야 하는데
  //원하는 데이터를 직렬화해서 일반적인 형식으로 변환
  //JSON.stringfy는 json format으로 JSON.parse는 JSON을 javascript 객체로 변환해준다.

  private _sum(numList: number[]): number {
    let result = 0;
    for (let num of numList) {
      result += num;
    }
    return result;
  }

  private _rage(start: number, end: number, step: number): number[] {
    let numberArray = [];

    if (start < end) {
      for (let i = start; i <= end; i += step) {
        numberArray.push(i);
      }
    } else {
      console.log('반복문 아래 실행');
      for (let i = start; i >= end; i += step) {
        numberArray.push(i);
      }
    }

    return numberArray;
  }

  private _reverseArray(list = []): any {
    let res = [];

    for (let i = list.length - 1; i >= 0; i -= 1) {
      res.push(list[i]);
    }

    console.log(res);

    return res;
  }
}
