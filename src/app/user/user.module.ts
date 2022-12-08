
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';



@NgModule({
  declarations: [UserFormComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class UserModule { }
