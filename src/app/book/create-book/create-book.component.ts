import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/book';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-book',
  templateUrl: 'create-book.component.html',
  styleUrls: ['./create-book.component.css'],
  providers: [MessageService]
})
export class CreateBookComponent {
  public book!: Book;
  public confirmed = false;
  public message: any;
  public exchanges = ['BOOK', 'ARTICLE', 'MAGAZINE'];
  constructor(private bookService: BookService,
    public messageService: MessageService) {
    this.book = new Book('', '', 0, 0, 2);
    this.messageService.message = 'Component Level: Hello Message Service';
  }

  setBookPrice(price: any) {
    this.book.price = price;
    this.book.previousPrice = price;
  }

  creatBook(bookForm: any) {
    if (bookForm.valid) {
      let created = this.bookService.createBook(this.book);
      if (created) {
        this.message = 'Successfully created book with book id: '
          + this.book.id;
        this.book = new Book('', '', 0, 0, 2);
      } else {
        this.message = 'Book with book id: ' + this.book.id
          + ' already exists';
      }
    } else {
      console.error('Book form is in an invalid state');
    }
  }
}
