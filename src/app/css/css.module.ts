import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { StickyComponent } from './sticky/sticky.component';
import { SizeFitComponent } from './size-fit/size-fit.component';
import { GridComponent } from './grid/grid.component';
import { ZIndexComponent } from './z-index/z-index.component';
import { OverflowComponent } from './overflow/overflow.component';

@NgModule({
  declarations: [CssComponent, StickyComponent, SizeFitComponent, GridComponent, ZIndexComponent, OverflowComponent],
  imports: [CommonModule, CssRoutingModule],
})
export class CssModule {}
