import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../patient.service";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  consultations: Observable<any>;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.consultations = this.patientService.patient.pipe(map(res => res.sessions));
  }

}
