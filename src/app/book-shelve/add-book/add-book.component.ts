import { Book } from 'src/app/book';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public nameControl = new FormControl();
  public book!: Book;
  constructor() {
    this.book = new Book('test', '', 0, 0, 0);
  }

  onSubmit() {
    console.log('Name Control Value', this.nameControl)
  }
}
