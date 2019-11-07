import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AuthService } from '../../login/auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  
  authenticated: boolean;

  constructor(
    private router: Router) { }
    // private afAuth: AngularFireAuth,
    // private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}