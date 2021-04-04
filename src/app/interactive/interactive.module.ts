import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveRoutingModule } from './interactive-routing.module';
import { ThreeDoorComponent } from './three-door/three-door.component';
import { AddComponentCardComponent } from './add-component-card/add-component-card.component';
import { InteractiveMainComponent } from './interactive-main/interactive-main.component';


@NgModule({
  declarations: [ThreeDoorComponent, AddComponentCardComponent, InteractiveMainComponent],
  imports: [
    CommonModule,
    InteractiveRoutingModule
  ]
})
export class InteractiveModule { }
