import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsComponent } from './ts.component';
import { LengthPipeComponent } from './length-pipe/length-pipe.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SwipeComponent } from './swipe/swipe.component';

const routes: Routes = [
  { path: '', component: TsComponent },
  { path: 'pipe', component: LengthPipeComponent },
  { path: 'swipe', component: SwipeComponent },
  { path: '**', redirectTo: 'ts' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatDatepickerModule],
  exports: [RouterModule],
})
export class TsRoutingModule {}
