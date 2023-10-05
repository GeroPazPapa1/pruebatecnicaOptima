import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://159.65.96.86:8080/services/auth/signin'; // URL del endpoint de autenticación
  private estaAutenticadoSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // Método para realizar la autenticación
  autenticar(username: string, password: string): Observable<any> {
    // Configura los datos de inicio de sesión
    const data = {
      username: username,
      password: password
    };

    // Realiza la solicitud POST al servidor
    return this.http.post(this.apiUrl, data);
  }

  // Método para establecer el estado de autenticación
  establecerAutenticado(estado: boolean) {
    this.estaAutenticadoSubject.next(estado);
  }

  // Método para verificar si el usuario está autenticado
  estaAutenticado(): Observable<boolean> {
    return this.estaAutenticadoSubject.asObservable();
  }
}
