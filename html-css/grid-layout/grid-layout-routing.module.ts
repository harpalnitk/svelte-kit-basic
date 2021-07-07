import { PhotoGridAnimatedComponent } from './photo-grid-animated/photo-grid-animated.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridLayoutPage } from './grid-layout.page';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  {
    path: '',
    component: GridLayoutPage,
  },
  {
    path: 'responsive',
    component: ResponsiveComponent,
  },
  {
    path: 'photo-grid',
    component: PhotoGridComponent,
  },
  {
    path: 'photo-grid-animated',
    component: PhotoGridAnimatedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridLayoutPageRoutingModule {}
