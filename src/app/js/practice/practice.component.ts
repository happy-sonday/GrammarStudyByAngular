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

    //launchMissiles();//작성하는 시점부터 사용가능하기때문에 작성되기전에 호출하면 에러

    // let launchMissiles = () => {
    //   console.log('now');
    // };

    //launchMissiles();

    console.log(this.multiplier(2));
    let twice = this.multiplier(2);
    console.log(twice(5));

    function findSolution(target) {
      function find(current, history) {
        if (current === target) {
          return history;
        } else if (current > target) {
          return null;
        } else {
          return (
            find(current + 5, `(${history}+5)`) ||
            find(current * 3, `(${history}*3)`)
          );
        }
      }

      return find(1, '1');
    }
    console.log(findSolution(24));

    function closerFnc(instance) {
      return (outer) => outer * instance;
    }

    const outerInstance = closerFnc(20);
    console.log(outerInstance);
    console.log(outerInstance(4));

    function printCloserFnc(str) {
      const outer = str;
      return (outer) => `${outer}`;
    }

    const str = printCloserFnc('인자로 값을 그대로 넣습니다.');
    console.log(str('외부에서 값을 넣어보겠습니다.'));

    /**함수 예제연습 */
    // this.findMinValue(1, 2);
    // this.findMinValue(99, 103);
    console.log(this.isEven(-1));

    console.log(this.countBs('BloB is too big dB type'));

    let storeObj = {
      mrhstNm: '솥뚜껑 오리엔탈 닭강정 철산점',
      optionMenu: ['후라이드', '달콤', '매콤', '반반', '파닭'],
      call: '01012341234',
    };

    storeObj.mrhstNm = '가마로 닭강정 철산점';

    delete storeObj.call; //객체내 해당 프로퍼티 삭제
    console.log(storeObj);
    console.log('mrhstNm' in storeObj); //키값 존재여부 확인
    console.log(Object.keys(storeObj)); //객체의 키값을 배열로 반환

    let cloneObj = {};
    Object.assign(cloneObj, storeObj);
    console.log(cloneObj); //객체 복사

    const score = { visitors: 0, home: 0 };
    score.visitors = 5;
    //score = { visitors: 0, home: 0 };//const 중괄호를 감싸는 새로운 객체를 할당할 수 없지만 위와같이 특정 프로퍼티에 접근해서 값을 변경하는 것은 가능하다.
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

  /**함수 */
  multiplier(factor) {
    return (number) => number * factor;
  }

  findMinValue(num1, num2) {
    const res = num1 > num2 ? num2 : num1;

    console.log(res);
  }

  isEven = (num) => {
    if (num == 0) return true;
    if (num == 1) return false;
    if (num < 0) return '??';
    //Maximum call stack size exceeded
    else return this.isEven(num - 2);
  };

  countBs = (s) => {
    let count = 0;
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === 'B') count += 1;
    }
    return count;
  };

  countChar = (s, c) => {
    let count = 0;
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === c) count += 1;
    }
    return count;
  };
}
