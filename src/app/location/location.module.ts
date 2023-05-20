import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcrum.module';
import { RouterModule, Routes } from '@angular/router';

// TODO: Creo una ruta propia apuntando a este componente

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class LocationModule {}
