import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReservasHabitacionesPage } from './reservasHabitaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasHabitacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReservasHabitacionesPage]
})
export class UsuariosPageModule {}
