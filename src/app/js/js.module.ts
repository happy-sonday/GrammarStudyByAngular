import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { ArrayComponent } from './array/array.component';
import { JsComponent } from './js.component';
import { ExMapComponent } from './ex-map/ex-map.component';
import { PracticeComponent } from './practice/practice.component';
import { JacquesComponent } from './jacques/jacques.component';
import { StrComponent } from './str/str.component';
import { ExtendsInheritComponent } from './extends-inherit/extends-inherit.component';

@NgModule({
  declarations: [
    ArrayComponent,
    JsComponent,
    ExMapComponent,
    PracticeComponent,
    JacquesComponent,
    StrComponent,
    ExtendsInheritComponent,
  ],
  imports: [CommonModule, JsRoutingModule],
})
export class JsModule {}
