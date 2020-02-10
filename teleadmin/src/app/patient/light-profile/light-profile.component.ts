import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../patient.interface';

@Component({
  selector: 'app-light-profile',
  templateUrl: './light-profile.component.html',
  styleUrls: ['./light-profile.component.scss']
})
export class LightProfileComponent implements OnInit {


  @Input() patient: Patient;
  constructor() { }

  ngOnInit() {
  }

}
