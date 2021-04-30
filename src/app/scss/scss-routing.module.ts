import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScssComponent } from './scss.component';

const routes: Routes = [{ path: '', component: ScssComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScssRoutingModule {}
