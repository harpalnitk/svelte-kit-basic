import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverlappingCardsPage } from './overlapping-cards.page';

const routes: Routes = [
  {
    path: '',
    component: OverlappingCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverlappingCardsPageRoutingModule {}
