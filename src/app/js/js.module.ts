import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { ArrayComponent } from './array/array.component';
import { JsComponent } from './js.component';
import { ExMapComponent } from './ex-map/ex-map.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [ArrayComponent, JsComponent, ExMapComponent, PracticeComponent],
  imports: [CommonModule, JsRoutingModule],
})
export class JsModule {}
