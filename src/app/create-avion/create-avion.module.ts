import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAvionPageRoutingModule } from './create-avion-routing.module';

import { CreateAvionPage } from './create-avion.page';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CreateAvionPageRoutingModule
  ],
  declarations: [CreateAvionPage],
  exports: [CreateAvionPage]
})
export class CreateAvionPageModule { }
