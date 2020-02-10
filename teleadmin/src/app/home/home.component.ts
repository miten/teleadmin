import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {SearchBarService} from './search-bar/search-bar.service';
import {LivestreamService} from '../livestream/livestream.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../livestream/notification/notification.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {Employee} from "../employee/employee.interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: BehaviorSubject<any>;
  results: BehaviorSubject<Employee[]>;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private searchBarService: SearchBarService, private liveStream: LivestreamService,
              private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet) { }


    openBottomSheet(x: number): void {
      this.bottomSheet.open(NotificationComponent, {
        data: x
      });
    }

    ngOnInit() {
    this.results = this.searchBarService.results;
    this.liveStream.connectRoom(this.authService.user.getValue()._id);
    this.liveStream.getCall().subscribe(data => {
      this.openBottomSheet(data);
    });
  }

}
