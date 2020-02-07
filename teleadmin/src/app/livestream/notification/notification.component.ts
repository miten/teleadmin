import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {EmployeeService} from '../../employee/employee.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private bottomSheetRef: MatBottomSheetRef<NotificationComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  employee: any;
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee(this.data.id);
  }
}
