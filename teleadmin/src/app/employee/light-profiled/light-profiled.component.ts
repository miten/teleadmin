import {Component, Input, OnInit} from '@angular/core';
import {LivestreamService} from '../../livestream/livestream.service';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {Employee} from '../employee.interface';

@Component({
  selector: 'app-light-profiled',
  templateUrl: './light-profiled.component.html',
  styleUrls: ['./light-profiled.component.scss']
})
export class LightProfiledComponent implements OnInit {

  @Input() employee: Employee;
  $user: BehaviorSubject<any>;


  constructor(private liveStream: LivestreamService, private authService: AuthService) { }

  connect() {
    this.liveStream.call({id: this.$user.getValue()._id, contactId: this.employee._id});
  }

  ngOnInit() {
    this.$user = this.authService.user;
  }

}
