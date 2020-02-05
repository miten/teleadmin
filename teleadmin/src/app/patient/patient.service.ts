import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  api = `${environment.api_url}/patient`;
  results = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}


  getPatient(id: string) {
    return this.http.get(`${this.api}/${id}`).toPromise();
  }
}
