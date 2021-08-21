import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: any;
  private _user: any;

  constructor(
    private api: ApiService
  ) {
    if (localStorage.getItem('user')) {
      this._user = JSON.parse(<string>localStorage.getItem('user'));
    }
    else {
      this._user = {};
    }
    if (localStorage.getItem('token')) {
      this._token = localStorage.getItem('token');
    }
    else {
      this._token = '';
    }
  }

  registerUser(user: any) {
    return this.api.post('/account/reg', user)
  }

  loginUser(user: any) {
    return this.api.post('/account/auth', user);
  }

  storeUser(token: string, user: any) {
    this._token = token;
    this._user = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this._token = null;
    this._user = null;
    localStorage.clear();
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }
}
