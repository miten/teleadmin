import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Patient} from './patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  api = `${environment.api_url}/patient`;

  constructor(private http: HttpClient) {}


  getPatient(id: string) {
    return this.http.get(`${this.api}/${id}`).toPromise();
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
