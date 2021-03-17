import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBasicRoutingModule } from './ng-basic-routing.module';
import { ItemComponent } from './item/item.component';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ItemComponent, MainComponent],
  imports: [CommonModule, NgBasicRoutingModule],
})
export class NgBasicModule {}
