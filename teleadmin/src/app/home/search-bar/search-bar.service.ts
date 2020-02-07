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

  getEmployees(value: string) {
    this.employeeService.getEmployees(value)
      .then(res => this.results.next(res))
      .catch(err => console.log(err));
  }

  getPatients(value: string) {
    this.patientService.getPatients(value)
      .then(res => this.results.next(res))
      .catch(err => console.log(err));
  }
}
