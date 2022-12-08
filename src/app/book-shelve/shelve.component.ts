import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';


@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent {
  counter = 1;
  public book!: Book;
  //public confirmed = false;
  //   public message = null;
  //   public exchange = ['NYSE','NASDAQ','OTHER']
  public bookForm!: FormGroup;
  //   constructor(private bookService: BookService) {
  //     this.initializeBook();
  //     // this.book = new Book('Test' + this.counter++, 'TST', 20, 10);
  //   }
  // initializeBook() { 
  //   this.book= {
  //     title: '',
  //     id: '',
  //     price: 0,
  //     previousPrice: 0,
  //     exchange: 'n',
  //     favorite: false
  //   };
  // }
  // setBookPrice(price:number) { 
  //   this.book.price = price;
  //   this.book.previousPrice = price;
  // }
  // createBook(bookForm:any) { 
  //   if(bookForm.valid) {
  //     this.bookService.createBook(this.book)
  //     .subscribe((result: any) => {
  //       this.message = result.msg;
  //       this.initializeBook();
  //     }, (err:any) => { 
  //       this.message = err.error.msg;
  //     });
  //   } else { 
  //     console.error('Book form is in an invalid state');
  //   }





  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // patchBookForm() {
  //   this.book = new Book(`Test ${counter++}`, 'TST', 20, 10);
  //   this.bookForm.patchValue(this.book);
  // }
  createForm() {
    this.bookForm = this.fb.group({
      name: [null, Validators.required],
      id: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notableItems: this.fb.array([])
    });
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
    this.book = new Book('Test' + this.counter++, 'TST', 20, 10);
    let bookFormModel = Object.assign({}, this.book);
    delete bookFormModel.previousPrice;
    delete bookFormModel.favorite;
    this.bookForm.setValue(bookFormModel);
  }
  // patchBookForm() {
  //   this.book = new Book(`Test ${this.counter++}`, 'TST', 20, 10);
  //   this.bookForm.patchValue(this.book);
  // }
  resetForm() {
    this.bookForm.reset();
  }
  onSubmit() {
    this.book = Object.assign({}, this.bookForm.value);
    console.log('Saving book', this.book);
  }

}
