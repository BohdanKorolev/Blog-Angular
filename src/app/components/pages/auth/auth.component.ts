import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    this.signInForm = new FormGroup({
      inputLogin: new FormControl('', [
        Validators.required
      ]),
      inputPassword: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.spinner.show();
    if (Object.keys(this.signInForm.controls)
      .filter((input: any) => this.signInForm.controls[input].errors?.required).length
    ) {
      console.log('Please fill in all fields');
      this.spinner.hide()
    }
    else {
      const userObject = {
        login: this.signInForm.value.inputLogin,
        password: this.signInForm.value.inputPassword,
      }
      this.authService.loginUser(userObject)
        .subscribe((resp: any) => {
          if (resp.success) {
            this.router.navigate(['/']);
            this.authService.storeUser(resp.token, resp.user);
          }
          else {
            console.log(resp.msg);
          }
          this.spinner.hide()
        })
    }
  }

}
