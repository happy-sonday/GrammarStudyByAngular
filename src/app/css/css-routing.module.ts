import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { OverflowComponent } from './overflow/overflow.component';

const routes: Routes = [
  { path: '', component: CssComponent },
  { path: 'overflow', component: OverflowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssRoutingModule {}
