import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';


@Injectable({
  providedIn: 'root'
})
export class Unsaved implements CanDeactivate<LoginComponent> {

  constructor() { }
  canDeactivate(component: LoginComponent){
    if(component.form.dirty) { 
      return confirm("Are you sure?");
    }
    return true;
  }
}
