import {Component, Input, OnInit} from '@angular/core';
import {LivestreamService} from '../../livestream/livestream.service';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-light-profiled',
  templateUrl: './light-profiled.component.html',
  styleUrls: ['./light-profiled.component.scss']
})
export class LightProfiledComponent implements OnInit {

  @Input() employee;
  $user: BehaviorSubject<any>;


  constructor(private liveStream: LivestreamService, private authService: AuthService) { }

  connect() {
    this.liveStream.call({id: this.$user.getValue()._id, contactId: this.employee._id});
  }

  ngOnInit() {
    this.$user = this.authService.user;
  }

}
