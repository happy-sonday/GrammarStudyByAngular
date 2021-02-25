import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'js' },
  {
    path: 'js',
    loadChildren: () => import('./js/js.module').then((m) => m.JsModule),
  },
  {
    path: 'ts',
    loadChildren: () => import('./ts/ts.module').then((m) => m.TsModule),
  },
  {
    path: '**',
    redirectTo: 'js',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
