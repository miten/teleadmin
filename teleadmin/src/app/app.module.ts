import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { LightProfileComponent } from './patient/light-profile/light-profile.component';
import { ProfileComponent } from './patient/profile/profile.component';
import { LightProfiledComponent } from './employee/light-profiled/light-profiled.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { AdminComponent } from './admin/admin.component';
import { NotificationComponent } from './livestream/notification/notification.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { WebcamModule } from 'ngx-webcam';
import { MatListModule, MatDatepickerModule } from '@angular/material';
import { ConsultationComponent } from './patient/consultation/consultation.component'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DatesortPipe} from '../pipes/datesort.pipe';

const config: SocketIoConfig = { url: environment.url, options: {}};
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchBarComponent,
    LightProfileComponent,
    LightProfileComponent,
    ProfileComponent,
    LightProfiledComponent,
    LivestreamComponent,
    AdminComponent,
    NotificationComponent,
    CapitalizePipe,
    DatesortPipe,
    ConsultationComponent



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
    WebcamModule,

    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatTooltipModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: []
      }
    })

  ],
  entryComponents: [
    NotificationComponent
  ],

  providers: [ { provide: LOCALE_ID, useValue: 'en-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
