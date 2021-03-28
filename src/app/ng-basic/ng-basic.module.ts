import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBasicRoutingModule } from './ng-basic-routing.module';
import { ItemComponent } from './item/item.component';

import { MainComponent } from './main/main.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsLogisticsComponent } from './rxjs-logistics/rxjs-logistics.component';
import { RxjsTradingComponent } from './rxjs-trading/rxjs-trading.component';

@NgModule({
  declarations: [ItemComponent, MainComponent, RxjsComponent, RxjsLogisticsComponent, RxjsTradingComponent],
  imports: [CommonModule, NgBasicRoutingModule],
})
export class NgBasicModule {}
