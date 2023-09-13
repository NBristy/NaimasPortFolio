import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public scope = {
    showSpinner: false
  }

  constructor() {
    let PASSWORD_REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,30}$/i
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, [ Validators.required, Validators.email ]),
      password: new UntypedFormControl(null, [ Validators.required, Validators.pattern(PASSWORD_REGEXP)])
    })
  }

  ngOnInit(): void {
  }

  public login() {
    console.log("login info", this.loginForm);
    console.log("login info", this.loginForm?.value);
    // call login API from here
  }

  public invalidRequired(target: string) {
    const err = this.loginForm.controls[target];
    try {
      return err.errors && err.errors['required'];
    } catch (e) {
      return false;
    }
  }

  public invalidPattern(target: any) {
    const err = this.loginForm.controls[target];
    try {
      if (target == 'email' && err.errors && err.errors['email']) {
        return true;
      } else if (target == 'password' && err.errors && err.errors['pattern']) {
        return true;
      } else {
        return false
      }
    } catch (e) {
      return false;
    }
  }

}
