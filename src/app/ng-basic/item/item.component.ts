import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Output() childOutputEvent = new EventEmitter<string>();

  outputItem(value: string) {
    this.childOutputEvent.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
