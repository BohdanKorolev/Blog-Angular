import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  isUserValid: boolean = false;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.isUserValid = this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated());
  }

  logOutUser() {
    console.log('lol');
    this.authService.logout();
    this.isUserValid = this.authService.isAuthenticated();
  }

}
