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


  patient: Patient;
  loginForm: FormGroup;

  modif() {

    this.loginForm.enable();
  }

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

        name: [this.patient.name, [Validators.minLength(3)]],
        surname: [this.patient.surname, [Validators.minLength(3)]],
        secu: [this.patient.secu, [Validators.minLength(3)]],

      });
      this.loginForm.disable();
    } else {

        this.loginForm = this.fb.group({

          name: ['', [Validators.minLength(3)]],
          surname: ['', [Validators.minLength(3)]],
          secu: ['', [Validators.minLength(3)]],

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
