import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  api = `${environment.api_url}/patient`;

  constructor(private http: HttpClient) {}


  getPatient(id: string) {
    return this.http.get(`${this.api}/${id}`).toPromise();
  }

  getPatients(value: string) {
    return this.http.get(`${this.api}/all/${value}`).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  modifyPatient(datas: object) {
    return this.http.patch(`${this.api}`, datas).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }


}
