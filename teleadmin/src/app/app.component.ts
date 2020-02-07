import {Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import {AuthService} from './auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {LivestreamService} from './livestream/livestream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $user: BehaviorSubject<any>;
  logo =  environment.logo;
  logout = environment.logout;

  constructor(private router: Router, private authService: AuthService) {}



  signOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.$user = this.authService.user;
  }

}
