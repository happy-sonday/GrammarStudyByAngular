import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  isEmpty = false;
  ngOnInit(): void {}

  onType(email: string): void {
    if (email) {
      this.isEmpty = true;
    }
  }
}
