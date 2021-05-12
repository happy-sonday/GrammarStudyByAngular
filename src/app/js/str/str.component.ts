import { Component, OnInit } from '@angular/core';

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
  }
}
