import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class Unsaved implements CanDeactivate<LoginComponent> {

  constructor() { }

  canDeactivate(component: LoginComponent) {
    if (component.form.dirty) {
      return confirm("Are you sure?");
    }
    return true;
  }
}
