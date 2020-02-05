import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject(null);
  api = `${environment.api_url}/auth`;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {}


  setUserData() {
    return this.http.get(`${this.api}/me`).toPromise()
      .then(res => this.user.next(res))
      .catch(err => console.log(err));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }


  logout() {
    this.user.next(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
