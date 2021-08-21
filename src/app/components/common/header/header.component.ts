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

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.user
  }

  logOutUser() {
    this.user = {};
    this.authService.logout();
  }

}
