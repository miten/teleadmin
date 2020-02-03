import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-profile',
  templateUrl: './light-profile.component.html',
  styleUrls: ['./light-profile.component.scss']
})
export class LightProfileComponent implements OnInit {


  @Input() profile: object;
  constructor() { }

  ngOnInit() {
  }

}
