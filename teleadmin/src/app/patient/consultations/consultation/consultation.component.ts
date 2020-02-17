import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  @Input() consultation;
  constructor() { }

  ngOnInit() {
  }

}
