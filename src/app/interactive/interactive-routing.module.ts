import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveMainComponent } from './interactive-main/interactive-main.component';
import { ThreeDoorComponent } from './three-door/three-door.component';

const routes: Routes = [{ path: '', component: InteractiveMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveRoutingModule {}
