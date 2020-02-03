import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  api = `${environment.api_url}/patient`;
  results = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}


  getQuery(typex: string, value: string) {
    return this.http.get(`${this.api}/${typex}/${value}`).toPromise()
      .then(res => this.results.next(res))
      .catch(err => console.log(err));
  }

}
