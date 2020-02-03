import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject(null);
  api = `${environment.api_url}/auth`;

  constructor(private http: HttpClient, private router: Router) {}


  setUserData() {
    return this.http.get(`${this.api}/me`).toPromise()
      .then(res => this.user.next(res))
      .catch(err => console.log(err));
  }
}
