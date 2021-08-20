import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) { }

  registerUser(user: any) {
    return this.api.post('/account/reg', user)
  }
}
