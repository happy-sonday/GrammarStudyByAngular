import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsComponent } from './ts.component';
import { LengthPipeComponent } from './length-pipe/length-pipe.component';
import { LengthPipePipe } from './length-pipe/length-pipe.pipe';
import { TsRoutingModule } from './length-pipe/ts-routing.module';

@NgModule({
  declarations: [TsComponent, LengthPipeComponent, LengthPipePipe],
  imports: [CommonModule, TsRoutingModule],
})
export class TsModule {}
