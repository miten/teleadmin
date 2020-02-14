import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {ProfileComponent} from './patient/profile/profile.component';
import {AdminComponent} from './admin/admin.component';
import {LivestreamComponent} from './livestream/livestream.component';
import { SessionComponent } from './patient/session/session.component';


const routes: Routes = [

  {
    path: '', canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'patient/:id', component: ProfileComponent},
      { path: 'employee/:id', component: ProfileComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'livestream', component: LivestreamComponent},
      { path: 'session', component: SessionComponent}
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
