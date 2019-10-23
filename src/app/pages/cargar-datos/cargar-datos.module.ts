import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargarDatosPage } from './cargar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: CargarDatosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CargarDatosPage]
})
export class CargarDatosPageModule {}
