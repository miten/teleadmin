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

  onSubmit() {
    const datas = this.loginForm.value;
    datas._id = this.patient._id;
    this.patientService.modifyPatient(datas)
      .then(res => this.patient = res)
      .catch(err => console.log(err));
  }


  loadForm() {
    this.loginForm = this.fb.group({
      gender: [this.patient.gender, [Validators.minLength(3)]],
      name: [this.patient.name, [Validators.minLength(3)]],
      surname: [this.patient.surname, [Validators.minLength(3)]],
      address: [this.patient.address, [Validators.minLength(3)]],
      email: [this.patient.email, [Validators.minLength(3), Validators.email]],
      phone: [this.patient.phone, [Validators.minLength(3)]],
      doctor: [this.patient.doctor, [Validators.minLength(3)]],
      allergy: [this.patient.allergy, [Validators.minLength(3)]],
      vaccins: [this.patient.vaccins, [Validators.minLength(3)]],
      notes: [this.patient.notes, [Validators.minLength(3)]]
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
