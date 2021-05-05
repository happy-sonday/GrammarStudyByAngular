import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBasicRoutingModule } from './ng-basic-routing.module';
import { ItemComponent } from './item/item.component';

import { MainComponent } from './main/main.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsLogisticsComponent } from './rxjs-logistics/rxjs-logistics.component';
import { RxjsTradingComponent } from './rxjs-trading/rxjs-trading.component';
import { RxjsAutoCompleteComponent } from './rxjs-auto-complete/rxjs-auto-complete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselComponent } from './carousel/carousel.component';
import { RxjsShareReplayComponent } from './rxjs-share-replay/rxjs-share-replay.component';
import { RxjsInmemoryComponent } from './rxjs-inmemory/rxjs-inmemory.component';

@NgModule({
  declarations: [
    ItemComponent,
    MainComponent,
    RxjsComponent,
    RxjsLogisticsComponent,
    RxjsTradingComponent,
    RxjsAutoCompleteComponent,
    CarouselComponent,
    RxjsShareReplayComponent,
    RxjsInmemoryComponent,
  ],
  imports: [CommonModule, NgBasicRoutingModule, MatProgressSpinnerModule],
})
export class NgBasicModule {}
