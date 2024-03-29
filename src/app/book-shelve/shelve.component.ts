import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent {
  counter = 1;
  public book!: Book;
  public bookForm!: FormGroup;
  public confirmed = false;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.book = new Book('Test' + this.counter++, 'BOOK', 20, 10, 0);
  }

  createForm() {
    this.bookForm = this.fb.group({
      name: [null, Validators.required],
      id: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notableItems: this.fb.array([])
    });
  }

  setBookPrice(price: any) {
    this.book.price = price;
    this.book.previousPrice = price;
  }

  createBook(bookForm: any) {
    console.log('Creatting book', this.book);
    if (bookForm.valid) {
      console.log('Creating book ', this.book);
    }
    else {
      console.error('Book form is in an invalid state');
    }
  }

  get notableItems(): FormArray {
    return this.bookForm.get('notableItems') as FormArray;
  }

  addNotableBook() {
    this.notableItems.push(this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required]
    }))
  }

  removeNotableBook(index: number) {
    this.notableItems.removeAt(index);
  }

  loadBookFromServer() {
    this.book = new Book('Test' + this.counter++, 'BOOK', 20, 10, 0);
    let bookFormModel = Object.assign({}, this.book);
    delete bookFormModel.previousPrice;
    delete bookFormModel.favorite;
    this.bookForm.setValue(bookFormModel);
  }

  patchBookForm() {
    this.book = new Book(`Test ${this.counter++}`, 'BOOK', 20, 10, 0);
    this.bookForm.patchValue(this.book);
  }

  resetForm() {
    this.bookForm.reset();
  }

  onSubmit() {
    this.book = Object.assign({}, this.bookForm.value);
    console.log('Saving book', this.book);
  }

}
