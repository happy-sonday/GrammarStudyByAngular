import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-door',
  templateUrl: './three-door.component.html',
  styleUrls: ['./three-door.component.scss'],
})
export class ThreeDoorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const stageElem = document.querySelector('.stage');
    let currentItem;

    function doorHandle(event) {
      const targetElem = <HTMLElement>event.target;
      //const currentItem = document.querySelector('.door-opened');
      if (currentItem) {
        currentItem.classList.remove('door-opened');
      }

      if (targetElem.classList.contains('door-body')) {
        /**클릭이벤트가 발생할때,
         * 해당 타겟을 감싸고 있는 부모노드에
         * 접근하여 classList 함수를 이용해 엘리먼트에 door-opend클래스를 추가한다.
         * * */
        (targetElem.parentNode as HTMLElement).classList.add('door-opened');
        currentItem = targetElem.parentNode;
      }
    }

    stageElem.addEventListener('click', doorHandle);
  }
}
