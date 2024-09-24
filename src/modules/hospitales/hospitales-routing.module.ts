import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { //  http://localhost:4200/hospitales/home
    path: 'home',
    loadComponent: () => import('../../modules/pages/home/home.component').then((home) => home.HomeComponent)
  },
  { //  http://localhost:4200/hospitales/citas
    path: 'citas',
    loadComponent: () => import('./citas/citas.component').then((citas) => citas.CitasComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
