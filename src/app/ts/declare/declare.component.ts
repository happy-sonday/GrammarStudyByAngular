import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Member {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-declare',
  templateUrl: './declare.component.html',
  styleUrls: ['./declare.component.scss'],
})
export class DeclareComponent implements OnInit {
  frm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
  });

  list = [
    { name: '홍길동', phone: '01012341234' },
    { name: 'sonday', phone: '01012341234' },
  ];

  obj: any = {};
  typeObj: Member;

  constructor() {}

  ngOnInit(): void {}

  // addMember(name: string, phone: string): void {
  //   const member = { name: '', phone: '' };

  //   member.name = this.frm.controls.name.value;
  //   member.phone = this.frm.controls.phone.value;

  //   //this.list.push(this.obj);
  //   this.list.push(member);
  // }
  addMember(name: string, phone: string): void {
    //addMember(obj: Member) {//templete에 인자 갯수가 달라 실행이 안됨//Expected 1 arguments, but got 2.
    // const member = { name: '', phone: '' };

    const member = {};

    // member.name = this.frm.controls.name.value;
    // member.phone = this.frm.controls.phone.value;
    // this.obj.name = name;
    // this.obj.phone = phone;
    // this.typeObj.name = name;//Cannot set property 'name' of undefined
    // this.typeObj.phone = phone;//Cannot set property 'name' of undefined

    this.typeObj = { name: name, phone: phone }; //제대로 실행

    //this.list.push(this.obj);
    //this.list.push(this.obj);
    this.list.push(this.typeObj);
  }
  // addMember(): void {
  //   const member = { name: '', phone: '' };
  //   console.log(this.frm.controls.name.value, this.frm.controls.phone.value);
  //   // this.obj.name = this.frm.controls.name.value;
  //   // this.obj.phone = this.frm.controls.phone.value;
  //   member.name = this.frm.controls.name.value;
  //   member.phone = this.frm.controls.phone.value;

  //   //this.list.push(this.obj);
  //   this.list.push(member);
  // }
}
