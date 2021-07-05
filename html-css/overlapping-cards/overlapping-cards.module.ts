import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverlappingCardsPageRoutingModule } from './overlapping-cards-routing.module';

import { OverlappingCardsPage } from './overlapping-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverlappingCardsPageRoutingModule
  ],
  declarations: [OverlappingCardsPage]
})
export class OverlappingCardsPageModule {}
