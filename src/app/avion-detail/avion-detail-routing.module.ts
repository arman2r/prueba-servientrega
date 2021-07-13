import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvionDetailPage } from './avion-detail.page';

const routes: Routes = [
  {
    path: ':avionId',
    component: AvionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvionDetailPageRoutingModule {}
