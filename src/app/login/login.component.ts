import { PasswordValidator } from './../passwordValidator';
import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    })
  }
  
  login() {
    var result = this.loginService.login(this.form.controls['username'].value,
      this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }

  logout() {
    var result = this.loginService.logout();

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }
}



