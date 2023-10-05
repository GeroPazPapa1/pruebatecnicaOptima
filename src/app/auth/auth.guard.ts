import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.estaAutenticado().pipe(
      map((autenticado) => {
        if (autenticado) {
          return true; // El usuario está autenticado, permitir el acceso
        } else {
          return this.router.createUrlTree(['/login']); // Redirigir al inicio de sesión si no está autenticado
        }
      })
    );
  }
}
