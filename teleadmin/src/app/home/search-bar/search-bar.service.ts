import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EmployeeService} from '../../employee/employee.service';
import {PatientService} from '../../patient/patient.service';
@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  results = new BehaviorSubject(null);

  constructor(private employeeService: EmployeeService, private patientService: PatientService) {}

  getEmployees(typex: string, value: string) {
    this.employeeService.getEmployees(typex, value)
      .then(res => this.results.next(res))
      .catch(err => console.log(err));
  }

  getPatients(typex: string, value: string) {
    this.patientService.getPatients(typex, value)
      .then(res => this.results.next(res))
      .catch(err => console.log(err));
  }
}
