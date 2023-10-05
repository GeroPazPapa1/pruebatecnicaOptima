import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { RouterModule } from '@angular/router'; // Para routerLink
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component'; // Importa LoginComponent


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent // Agrega LoginComponent a las declaraciones
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de que HttpClientModule esté aquí
    FormsModule, // Agrega FormsModule a los imports
    RouterModule, // Agrega RouterModule a los imports
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
