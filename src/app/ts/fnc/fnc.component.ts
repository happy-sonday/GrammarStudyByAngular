import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fnc',
  templateUrl: './fnc.component.html',
  styleUrls: ['./fnc.component.scss'],
})
export class FncComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /** 함수 표현식 */
    let add = (a, b) => a + b;
    console.log(add(1, 2));

    let typeAdd = (a: number, b: number): number => a + b;
    //console.log(typeAdd('a',2));//gument of type 'string' is not assignable to parameter
  }
}
