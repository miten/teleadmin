import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EmployeeService} from '../../employee/employee.service';
import {PatientService} from '../../patient/patient.service';
@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  employeesR = new BehaviorSubject(null);
  patientsR = new BehaviorSubject(null);

  constructor(private employeeService: EmployeeService, private patientService: PatientService) {}

  getEmployees(value: string) {
    this.employeeService.getEmployees(value)
      .then(res => this.employeesR.next(res))
      .then(res => this.patientsR.next(res))
      .catch(err => console.log(err));
  }

  getPatients(value: string) {
    this.patientService.getPatients(value)
      .then(res => this.patientsR.next(res))
      .then(res => this.employeesR.next(res))
      .catch(err => console.log(err));
  }
}
