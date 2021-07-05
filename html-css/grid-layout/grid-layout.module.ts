import { PhotoGridAnimatedComponent } from './photo-grid-animated/photo-grid-animated.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridLayoutPageRoutingModule } from './grid-layout-routing.module';

import { GridLayoutPage } from './grid-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridLayoutPageRoutingModule,
  ],
  declarations: [
    GridLayoutPage,
    ResponsiveComponent,
    PhotoGridComponent,
    PhotoGridAnimatedComponent,
  ],
})
export class GridLayoutPageModule {}
