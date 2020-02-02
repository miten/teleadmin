import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm: FormGroup;
  active = true;
  fullAddress: string;
  patient = {
    gender: "m",
    name: "neymar",
    surname: "jean", 
    address: "35 rue du général leclerc",
    city: "issy",
    zipcode: "92130",
    email: "jean.cule@gmail.com",
    phone: "0612345678",
    doctor: "dr Ibert",
    allergy: "nan",
    vaccins: "nan",
    notes: "ras",
    secu: "1234564789"

  }
  doit(){
    this.loginForm.disable();
    this.active = true;
  }
  doitt(){
    this.loginForm.enable();
    this.active = false;
  }

  

 

  ngOnInit() {
    
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

}
