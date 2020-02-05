import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {SearchBarService} from './search-bar/search-bar.service';
import {LivestreamService} from '../livestream/livestream.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService,
              private searchBarService: SearchBarService, private liveStream: LivestreamService,
              private snackBar: MatSnackBar) { }
  user: BehaviorSubject<any>;
  profiles: BehaviorSubject<object[]>;

  ngOnInit() {
    this.profiles = this.searchBarService.results;
    this.user = this.authService.user;
    this.authService.user.subscribe(user => {
      if (user.status === 1) {
        this.liveStream.connectChatroom(user._id);
      }
    });
    this.liveStream.receiveChat().subscribe(_ => {
      this.snackBar.open('APPEL EN COURS');
    });
  }

}
