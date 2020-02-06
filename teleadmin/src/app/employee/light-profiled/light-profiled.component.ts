import {Component, Input, OnInit} from '@angular/core';
import {LivestreamService} from "../../livestream/livestream.service";

@Component({
  selector: 'app-light-profiled',
  templateUrl: './light-profiled.component.html',
  styleUrls: ['./light-profiled.component.scss']
})
export class LightProfiledComponent implements OnInit {

  @Input() employee;


  constructor(private liveStream: LivestreamService) { }

  connect() {
    this.liveStream.addMessage({_id: 'jesuisla'}, this.employee._id);
  }

  ngOnInit() {
  }

}
