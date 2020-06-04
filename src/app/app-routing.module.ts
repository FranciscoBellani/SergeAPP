import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'reservas', loadChildren: './pages/reservas/reservas.module#ReservasPageModule' },
  { path: 'reservasVehiculos', loadChildren: './pages/reservasVehiculos/reservasVehiculos.module#ReservasVehiculosPageModule' },
  { path: 'habitaciones', loadChildren: './pages/habitaciones/habitaciones.module#HabitacionesPageModule' },
  { path: 'vehiculos', loadChildren: './pages/vehiculos/vehiculos.module#VehiculosPageModule' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },  
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
