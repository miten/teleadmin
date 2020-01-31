import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = `${environment.api_url}`;

  constructor(private http: HttpClient, private router: Router){}

  login(password: string, username: string) {
    return this.http.post(`${this.api}/login`, { username, password }).toPromise()
      .then(res => localStorage.setItem('access_token', res['access_token']))
      .catch(res => this.router.navigate(['/home']));
  }
}
