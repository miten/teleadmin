import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: '../profile/profile.component.html',
  styleUrls: ['../profile/profile.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  loginForm: FormGroup;


  onSubmit() {
    console.log(this.loginForm.value);
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      gender: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      doctor: ['', [Validators.required, Validators.minLength(3)]],
      allergy: ['', [Validators.minLength(3)]],
      vaccins: ['', [Validators.minLength(3)]],
      notes: ['', [Validators.minLength(3)]],
      secu: ['', [Validators.required, Validators.max(15)]]
    });
  }

}
