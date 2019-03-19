import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private router: Router, private auth: LoginService) { }
  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      // logged in so return true
          return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

}
