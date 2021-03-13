import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {
  eventText = '';

  onSwipe(evt) {
    const x =
      Math.abs(evt.deltaX) > 20 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 20 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    this.eventText += `${x} ${y}<br/>`;
    console.log(this.eventText);
  }
  constructor() {}

  ngOnInit(): void {}
}
