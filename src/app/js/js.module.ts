import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { ArrayComponent } from './array/array.component';
import { JsComponent } from './js.component';
import { ExMapComponent } from './ex-map/ex-map.component';

@NgModule({
  declarations: [ArrayComponent, JsComponent, ExMapComponent],
  imports: [CommonModule, JsRoutingModule],
})
export class JsModule {}
