import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Importa el componente de inicio de sesión
import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente del dashboard

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'dashboard', component: DashboardComponent }, // Ruta para la página de dashboard
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección al inicio de sesión por defecto
  // Puedes agregar más rutas aquí si es necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
