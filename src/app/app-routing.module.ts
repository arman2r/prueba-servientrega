import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'avion-detail',
    loadChildren: () => import('./avion-detail/avion-detail.module').then( m => m.AvionDetailPageModule)
  },
  {
    path: 'create-avion',
    loadChildren: () => import('./create-avion/create-avion.module').then( m => m.CreateAvionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
