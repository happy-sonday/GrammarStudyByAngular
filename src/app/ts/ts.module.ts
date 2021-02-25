import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsRoutingModule } from './ts-routing.module';
import { TsComponent } from './ts.component';


@NgModule({
  declarations: [TsComponent],
  imports: [
    CommonModule,
    TsRoutingModule
  ]
})
export class TsModule { }
