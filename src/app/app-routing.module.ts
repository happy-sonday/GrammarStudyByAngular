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
    path: 'ng',
    loadChildren: () =>
      import('./ng/component-routing.module').then(
        (m) => m.ComponentRoutingModule
      ),
  },
  {
    path: 'ng-basic',
    loadChildren: () =>
      import('./ng-basic/ng-basic-routing.module').then(
        (m) => m.NgBasicRoutingModule
      ),
  },
  {
    path: 'interactive',
    loadChildren: () =>
      import('./interactive/interactive.module').then(
        (m) => m.InteractiveModule
      ),
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then((m) => m.CssModule),
  },
  {
    path: 'scss',
    loadChildren: () => import('./scss/scss.module').then((m) => m.ScssModule),
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
