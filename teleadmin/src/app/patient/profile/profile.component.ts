import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../patient.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../patient.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private patientService: PatientService) {}

  startDate = new Date(1970, 0, 1);
  patient: Patient;
  loginForm: FormGroup;

  onSubmit() {
    const datas = this.loginForm.value;
    if (this.patient) {
      datas._id = this.patient._id;
      this.patientService.modifyPatient(datas)
        .then(res => this.patient = res)
        .catch(err => console.log(err));
    } else {
      this.patientService.addPatient(datas)
        .then(res => this.patient = res)
        .catch(err => console.log(err));
    }
  }


  loadForm() {
    if (this.patient) {
      this.loginForm = this.fb.group({
        gender: [this.patient.gender, [Validators.maxLength(1)]],
        name: [this.patient.name, [Validators.minLength(3)]],
        surname: [this.patient.surname, [Validators.minLength(3)]],
        birthday: [this.patient.birthday, [Validators.required]],
        city: [this.patient.city, [Validators.minLength(3)]],
        street: [this.patient.street, [Validators.minLength(3)]],
        phone: [this.patient.phone, [Validators.maxLength(10)]],
        email: [this.patient.email, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)")]],
        secu: [this.patient.secu, [Validators.minLength(15)], [Validators.maxLength(15)]]

      });
    } else {

      this.loginForm = this.fb.group({
        gender: ['', [Validators.maxLength(1)]],
        name: ['', [Validators.minLength(3)]],
        surname: ['', [Validators.minLength(3)]],
        birthday: ['', [Validators.required]],
        city: ['', [Validators.minLength(3)]],
        street: ['', [Validators.minLength(3)]],
        phone: ['', [Validators.maxLength(10)]],
        email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)")]],
        secu: ['', [Validators.minLength(15)], [Validators.maxLength(15)]]
        });
    }
  }


  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.paramMap.get('id'))
      .then((datas: Patient) => this.patient = datas._id ? datas : null)
      .then(_ => this.loadForm())
      .catch(err => console.log(err));
  }


}
