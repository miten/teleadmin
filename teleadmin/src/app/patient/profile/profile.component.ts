import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private patientService: PatientService) {}

  patient: any;
  loginForm: FormGroup;
  searchForm: FormGroup;
  active = true;
  fullAddress: string;


  doit() {
    this.loginForm.disable();
    this.active = true;
  }
  doitt() {
    this.loginForm.enable();
    this.active = false;
  }

  search() {
    console.log(this.searchForm.value);
  }


  loadForm() {
    this.fullAddress= `${this.patient.address} , ${this.patient.zipcode} , ${this.patient.city}`;
    this.loginForm = this.fb.group({
      gender: [this.patient.gender, [Validators.required, Validators.minLength(3)]],
      name: [this.patient.name, [Validators.required, Validators.minLength(3)]],
      surname: [this.patient.surname, [Validators.required, Validators.minLength(3)]],
      address: [this.patient.address, [Validators.required, Validators.minLength(3)]],
      email: [this.patient.email, [Validators.required, Validators.minLength(3), Validators.email]],
      phone: [this.patient.phone, [Validators.required, Validators.minLength(3)]],
      doctor: [this.patient.doctor, [Validators.required, Validators.minLength(3)]],
      allergy: [this.patient.allergy, [Validators.required, Validators.minLength(3)]],
      vaccins: [this.patient.vaccins, [Validators.required, Validators.minLength(3)]],
      notes: [this.patient.notes, [Validators.required, Validators.minLength(3)]]
    });
    this.loginForm.disable();
  }


  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.paramMap.get('id'))
      .then(datas => this.patient = datas)
      .then(_ => this.loadForm())
      .catch(err => console.log(err));
  }


}
