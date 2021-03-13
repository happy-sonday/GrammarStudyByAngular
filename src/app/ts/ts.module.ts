import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsComponent } from './ts.component';
import { LengthPipeComponent } from './length-pipe/length-pipe.component';
import { LengthPipePipe } from './length-pipe/length-pipe.pipe';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { TsRoutingModule } from './ts-routing.module';
import { SwipeComponent } from './swipe/swipe.component';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TsComponent,
    LengthPipeComponent,
    LengthPipePipe,
    SwipeComponent,
  ],
  imports: [CommonModule, TsRoutingModule, MatDatepickerModule, HammerModule],
})
export class TsModule {}
