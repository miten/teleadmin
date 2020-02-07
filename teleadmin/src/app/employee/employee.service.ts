import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = `${environment.api_url}/employee`;

  constructor(private http: HttpClient) {}


  getEmployee(id: string) {
    return this.http.get(`${this.api}/${id}`).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }


  getEmployees(value: string) {
    return this.http.get(`${this.api}/all/${value}`).toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  modifyEmployee(datas: object) {
    return this.http.patch(`${this.api}`, datas).toPromise()
      .then(res => res)
      .catch(res => console.log(res));
  }
}
