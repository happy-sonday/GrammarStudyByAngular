import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
  todoList = [];

  remember = (task) => {
    this.todoList.push(task);
  };

  getTask = () => this.todoList.shift();

  rememberUrgently = (task) => this.todoList.unshift(task);

  remove = (array = [], index) =>
    array.slice(0, index).concat(array.slice(index + 3));

  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  constructor() {
    this.remember('groceries');

    this.rememberUrgently('first urgently');
    console.log(this.todoList);
    // this.getTask();
    // console.log(this.todoList);

    console.log([1, 2, 3, 4, 5].indexOf(2)); //배열에서 2의 인덱스위치를 맨 앞을 기준으로 반환
    console.log([5, 6, 7, 8, 9].lastIndexOf(6)); //배열에서 6의 인덱스 위치를 맨 앞을 기준으로 반환

    console.log([0, 1, 2, 3, 4, 5].slice(2, 5)); //인덱스 2 이상 인덱스 5미만
    console.log([0, 1, 2, 3, 4, 5].slice(2));

    console.log(this.remove(this.alphabet, 2)); //c의 index=2 index+3=5 2이상 5미만 삭제(2,3,4)
    console.log(this.alphabet); //slice와 concat은 원본 복사하여 해당 메서드를 실행하기때문에 그대로 출력된다.
  }

  ngOnInit(): void {}
}
