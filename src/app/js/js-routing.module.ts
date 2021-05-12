import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { ExMapComponent } from './ex-map/ex-map.component';
import { ExtendsInheritComponent } from './extends-inherit/extends-inherit.component';
import { JacquesComponent } from './jacques/jacques.component';
import { JsComponent } from './js.component';
import { PracticeComponent } from './practice/practice.component';
import { StrComponent } from './str/str.component';

const routes: Routes = [
  { path: '', component: JsComponent },
  { path: 'array', component: ArrayComponent },
  { path: 'map', component: ExMapComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'jacques', component: JacquesComponent },
  { path: 'str', component: StrComponent },
  { path: 'extends', component: ExtendsInheritComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsRoutingModule {}
