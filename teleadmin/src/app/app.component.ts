import {Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import {AuthService} from './auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { NotificationComponent } from './livestream/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $user: BehaviorSubject<any>;
  logo =  environment.logo;
  logout = environment.logout;
  
  constructor(private router: Router, private authService: AuthService, private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(NotificationComponent, {
      data: {
        patient: '5e38451766b2871114d3111a',
        employee: '5e397872e408f156acd3d476'
      }
    });
  }


  signOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.$user = this.authService.user;
  }

}
