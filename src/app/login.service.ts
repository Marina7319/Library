import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  login(username: any, password: any) {
    if (username.length > 3 && password.length > 3)
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }

}
