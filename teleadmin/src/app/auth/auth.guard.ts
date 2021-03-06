import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 

  constructor(public router: Router, private authService: AuthService) {}


  canActivate(): boolean | Promise<boolean> {

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      if (this.authService.user.getValue() === null) {
        this.authService.setUserData();
      }
      return true;
    }
  }

}
