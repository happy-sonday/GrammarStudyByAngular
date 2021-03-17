import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  /**
   *
   *자식에게서 전달된 값 확인
   *
   */
  parentItem(childValue) {
    console.log(`자식으로부터 전달된 값은${childValue}`);
  }
  constructor() {}

  ngOnInit(): void {}
}
