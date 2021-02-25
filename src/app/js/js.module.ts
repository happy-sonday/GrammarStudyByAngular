import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { ArrayComponent } from './array/array.component';
import { JsComponent } from './js.component';

@NgModule({
  declarations: [ArrayComponent, JsComponent],
  imports: [CommonModule, JsRoutingModule],
})
export class JsModule {}
