import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvionDetailPageRoutingModule } from './avion-detail-routing.module';

import { AvionDetailPage } from './avion-detail.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AvionDetailPageRoutingModule
  ],
  declarations: [AvionDetailPage]
})
export class AvionDetailPageModule {}
