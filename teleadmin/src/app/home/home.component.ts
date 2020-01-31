import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { GridGapDirective } from '@angular/flex-layout/grid/typings/gap/gap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  active = true;
  fullAddress: string;
  patient = {
    gender: "m",
    name: "cule",
    surname: "jean", 
    address: "35 rue du général leclerc",
    city: "issy",
    zipcode: "92130",
    mail: "jean.cule@gmail.com",
    phone: "0612345678",
    doctor: "dr Ibert",
    allergy: "nan",
    vaccins: "nan",
    notes: "ras"

  }
  
  ngOnInit() {
    this.fullAddress= `${this.patient.address} , ${this.patient.zipcode} , ${this.patient.city}`;
  }

}
