import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'reservas', loadChildren: './pages/reservas/reservas.module#ReservasPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'habitaciones', loadChildren: './pages/habitaciones/habitaciones.module#HabitacionesPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'cargar-datos', loadChildren: './pages/cargar-datos/cargar-datos.module#CargarDatosPageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
