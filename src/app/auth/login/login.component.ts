import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Agrega propiedades para almacenar el nombre de usuario y contraseña
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  autenticar() {
    // Verifica que los campos de nombre de usuario y contraseña no estén vacíos
    if (!this.username || !this.password) {
      console.log('Por favor, completa todos los campos.');
      return;
    }

    // Utiliza el servicio de autenticación para realizar la autenticación real
    this.authService.autenticar(this.username, this.password).subscribe({
      next: (response) => {
        // La autenticación fue exitosa, maneja la respuesta aquí
        console.log('Autenticación exitosa:', response);

        // Redirige al usuario al Dashboard u otra página
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // La autenticación falló, maneja el error aquí
        console.error('Error de autenticación:', error);
        // Puedes mostrar un mensaje de error en la interfaz o realizar otras acciones según tus necesidades
      }
    });
  }
}
