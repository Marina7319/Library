import { Component } from '@angular/core';
import { User } from '../user/user';

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
