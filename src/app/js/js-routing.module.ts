import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { ExMapComponent } from './ex-map/ex-map.component';
import { JsComponent } from './js.component';

const routes: Routes = [
  { path: '', component: JsComponent },
  { path: 'array', component: ArrayComponent },
  { path: 'map', component: ExMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsRoutingModule {}
