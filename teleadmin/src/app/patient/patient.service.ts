import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  api = `${environment.api_url}/patient`;
  patient = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}


  getPatient(id: string) {
    return this.http.get(`${this.api}/${id}`).toPromise()
      .then(res => this.patient.next(res))
      .catch(err => console.log(err));
  }

  getPatients(value: string): Promise<any> {
    return this.http.get(`${this.api}/all/${value}`).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  addPatient(datas: object): Promise<any> {
    return this.http.post(`${this.api}`, datas).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }


  modifyPatient(datas: object): Promise<any> {
    return this.http.patch(`${this.api}`, datas).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }


}
