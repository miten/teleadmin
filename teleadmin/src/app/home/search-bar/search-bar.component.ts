import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchBarService} from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private fb: FormBuilder, private searchBarService: SearchBarService) { }

  searchForm: FormGroup;
  patient = true;
  employee = false;

  search() {
    if (this.patient === true) {
      this.searchBarService.getPatients(this.searchForm.value.query);
    } else {
      this.searchBarService.getEmployees(this.searchForm.value.query);
    }
  }

  selected(x) {
    if (x === 1) {
      this.patient = true;
      this.employee = false;
    } else {
      this.patient = false;
      this.employee = true;
    }
  }


  ngOnInit() {

    this.searchForm = this.fb.group({
      query: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

}
