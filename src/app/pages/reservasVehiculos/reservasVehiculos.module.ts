import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReservasVehiculosPage } from './reservasVehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasVehiculosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReservasVehiculosPage]
})
export class ReservasVehiculosPageModule {}
