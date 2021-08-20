import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      inputName: new FormControl(''),
      inputLogin: new FormControl( '', [
        Validators.required
      ]),
      inputEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      inputPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
      ]),
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(
      this.signUpForm.controls.inputName.value,
      this.signUpForm.controls.inputLogin.value,
      this.signUpForm.controls.inputEmail.value,
      this.signUpForm.controls.inputPassword.value,
      )
  }

}
