import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'reservas', loadChildren: './pages/reservas/reservas.module#ReservasPageModule' },
  { path: 'reservasVehiculos', loadChildren: './pages/reservasVehiculos/reservasVehiculos.module#ReservasVehiculosPageModule' },
  { path: 'habitaciones', loadChildren: './pages/habitaciones/habitaciones.module#HabitacionesPageModule' },
  { path: 'vehiculos', loadChildren: './pages/vehiculos/vehiculos.module#VehiculosPageModule' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },  
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
