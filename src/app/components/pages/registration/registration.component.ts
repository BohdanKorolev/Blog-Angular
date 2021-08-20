import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.signUpForm = new FormGroup({
      inputName: new FormControl(''),
      inputLogin: new FormControl('', [
        Validators.required
      ]),
      inputEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      inputPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ]),
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.spinner.show();
    if (Object.keys(this.signUpForm.controls)
        .filter((input: any) => this.signUpForm.controls[input].errors?.required).length
    ) {
      console.log('Please fill in all fields');
      this.spinner.hide()
    }
    else if (this.signUpForm.controls.inputPassword.errors?.pattern) {
      console.log('Minimum eight characters, at least one letter and one number');
      this.spinner.hide()
    }
    else {
      const userObject = {
        name: this.signUpForm.value.inputName,
        login: this.signUpForm.value.inputLogin,
        email: this.signUpForm.value.inputEmail,
        password: this.signUpForm.value.inputPassword,
      }
      this.authService.registerUser(userObject)
        .subscribe((resp: any) => {
          if (resp.success) {
            console.log('User has been added');
            this.router.navigate(['/auth']);
          }
          else {
            console.log('User has not been added');
          }
          this.spinner.hide()
        })
    }
  }

}
