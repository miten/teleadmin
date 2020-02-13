import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


 loginForm: FormGroup;
  submitted = false;
  logo =  environment.logo;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private loginService: LoginService,
              private router: Router) {
  }


  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      this.snackBar.open('Formulaire invalide', 'X', {duration: 3000});
    } else {
      this.loginService.login(this.loginForm.value.password, this.loginForm.value.username)
        .catch(err => this.snackBar.open('Identifiants incorrects', 'X', {duration: 3000}));
    }
  }


  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

}
