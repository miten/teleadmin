import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {ProfileComponent} from './patient/profile/profile.component';
import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {AdminComponent} from './admin/admin.component';
import {LivestreamComponent} from './livestream/livestream.component';


const routes: Routes = [

  {
    path: '', canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'patient/:id', component: ProfileComponent},
      { path: 'add-patient', component: AddPatientComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'livestream', component: LivestreamComponent}
    ]
  },
  {path: 'login' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
