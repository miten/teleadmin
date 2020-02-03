import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { LightProfileComponent } from './patient/light-profile/light-profile.component';
import { ProfileComponent } from './patient/profile/profile.component';


const config: SocketIoConfig = { url: environment.url, options: {}};
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AjoutPatientComponent,
    SearchBarComponent,
    LightProfileComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: []
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
