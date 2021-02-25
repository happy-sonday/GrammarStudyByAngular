import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { JsComponent } from './js.component';

const routes: Routes = [
  { path: '', component: JsComponent },
  { path: 'array', component: ArrayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsRoutingModule {}
