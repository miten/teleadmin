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


  search() {
    this.searchBarService.getQuery('secu', this.searchForm.value.query);
  }

  ngOnInit() {

    this.searchForm = this.fb.group({
      query: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

}
