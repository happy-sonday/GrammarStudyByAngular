import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MypageGridComponent } from './pages/mypage-grid/mypage-grid.component';
@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    MypageGridComponent,
  ],
  imports: [CommonModule, ComponentRoutingModule, MatIconModule],
})
export class ComponentModule {}
