import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssRoutingModule } from './scss-routing.module';
import { ScssComponent } from './scss.component';


@NgModule({
  declarations: [ScssComponent],
  imports: [
    CommonModule,
    ScssRoutingModule
  ]
})
export class ScssModule { }
