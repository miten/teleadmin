import { Component, OnInit } from '@angular/core';
import {PatientService} from "./patient.service";
import {ActivatedRoute} from "@angular/router";
import {Patient} from "./patient.interface";
import {Location} from "@angular/common";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patient: BehaviorSubject<any>;

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.patientService.getPatient(this.route.snapshot.paramMap.get('id'))
     .then( _ => this.patient = this.patientService.patient);

  }
}
