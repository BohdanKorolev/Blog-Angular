import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {RegistrationComponent} from "./components/pages/registration/registration.component";
import {AuthComponent} from "./components/pages/auth/auth.component";
import {DashboardComponent} from "./components/pages/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reg',
    component: RegistrationComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
