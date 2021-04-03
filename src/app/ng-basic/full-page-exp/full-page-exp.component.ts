import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-full-page-exp',
  templateUrl: './full-page-exp.component.html',
  styleUrls: ['./full-page-exp.component.scss'],
})
export class FullPageExpComponent implements OnInit {
  activeSection = 1;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}
  ngOnInit(): void {}

  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });

    this.activeSection = i;
  }
}
