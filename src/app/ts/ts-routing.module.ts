import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsComponent } from './ts.component';

const routes: Routes = [
  { path: '', component: TsComponent },
  { path: '**', redirectTo: 'ts' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsRoutingModule {}
