import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extends-inherit',
  templateUrl: './extends-inherit.component.html',
  styleUrls: ['./extends-inherit.component.scss'],
})
export class ExtendsInheritComponent implements OnInit {
  ngOnInit(): void {}
}

class Animal {
  age: number;
  weight: number;
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return 'eat';
  }

  move() {
    return 'move';
  }
}

class Bird extends Animal {
  fly() {
    return 'fly';
  }
}
const bird = new Bird(1, 5);
console.log(bird.eat());
console.log(bird.age);
console.log(bird.move());
console.log(bird.fly());

class Parent {
  a: any;
  b: any;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Child extends Parent {
  constructor(a, b) {
    super(a, b);
  }
}

const output = new Child(10, 20);
console.log(output);

class Instrucment {
  list = ['piano', 'drum', 'guitar'];

  constructor(args: any) {
    this.list.push(args);
  }
}

class Taleyor extends Instrucment {
  type = 'contry';
  string = 'metal';
  constructor(data: any) {
    super(data);
  }
}
class penta extends Instrucment {
  type = 'eletornic';
  string = 'thin';

  constructor(data: any) {
    super(data);
  }
}

const guitar = new Taleyor('Taleyor');

console.log(guitar.list);
