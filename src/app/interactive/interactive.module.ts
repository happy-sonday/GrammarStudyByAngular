import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveRoutingModule } from './interactive-routing.module';
import { ThreeDoorComponent } from './three-door/three-door.component';


@NgModule({
  declarations: [ThreeDoorComponent],
  imports: [
    CommonModule,
    InteractiveRoutingModule
  ]
})
export class InteractiveModule { }
