import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAvionPage } from './create-avion.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAvionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAvionPageRoutingModule {}
