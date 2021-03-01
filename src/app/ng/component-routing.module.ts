import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MypageGridComponent } from './pages/mypage-grid/mypage-grid.component';

const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  { path: 'mypage', component: MypageGridComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
