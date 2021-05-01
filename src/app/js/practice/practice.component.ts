import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //this.makeSharpTriangle(7);
    //this.makeFizzBuzz(100);
    this.makeChess(10);
  }

  makeSharpTriangle(height: number): void {
    for (let i = 0; i < height; i++) {
      let output = '#';
      for (let j = 0; j < i; j++) {
        let sharp = '#';
        output += sharp;
      }

      console.log(`${output}\n`);
    }
  }

  makeFizzBuzz(range: number): void {
    for (let i = 1; i <= 100; i++) {
      //console.log(`${i + 1} \n`);

      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }

  makeChess(size: number): void {
    for (let i = 1; i <= size; i++) {
      let first = ' ';
      if (i % 2 == 0) {
        first = '#';
        for (let j = 2; j <= size; j++) {
          if (j % 2 == 0) {
            first += ' ';
          } else {
            first += '#';
          }
        }
      } else {
        for (let j = 2; j <= size; j++) {
          if (j % 2 == 0) {
            first += '#';
          } else {
            first += ' ';
          }
        }
      }
      console.log(`${first}\n`);
    }
  }
}
