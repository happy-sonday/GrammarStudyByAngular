import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDoorComponent } from './three-door/three-door.component';

const routes: Routes = [{ path: '', component: ThreeDoorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveRoutingModule {}
