import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  countries = ['United States', 'Singapore',
'Hong Kong', 'Australia'];
  model = new User('', '', '');
  submitted = false;

  onSubmit() {
    this.submitted =true;
  }

}
