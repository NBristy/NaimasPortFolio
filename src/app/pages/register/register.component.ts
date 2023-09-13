import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: UntypedFormGroup;
  public scope = {
    showSpinner: false
  }

  constructor() { 
    let PASSWORD_REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,30}$/i
    this.registerForm = new UntypedFormGroup({
      name : new UntypedFormControl(null, Validators.required),
      email: new UntypedFormControl(null, [ Validators.required, Validators.email ]),
      password: new UntypedFormControl(null, [ Validators.required, Validators.pattern(PASSWORD_REGEXP)]),
      confirmPassword: new UntypedFormControl(null, [ Validators.required, Validators.pattern(PASSWORD_REGEXP)])
    })
  }

  ngOnInit(): void {
  }

  public register() {
    console.log("login info", this.registerForm);
    console.log("login info", this.registerForm?.value);
    // call registration API from here
  }

  public invalidRequired(target: string) {
    const err = this.registerForm.controls[target];
    try {
      return err.errors && err.errors['required'];
    } catch (e) {
      return false;
    }
  }

  public invalidPattern(target: any) {
    const err = this.registerForm.controls[target];
    try {
      if (target == 'email' && err.errors && err.errors['email']) {
        return true;
      } else if (target == 'password' && err.errors && err.errors['pattern']) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

}
