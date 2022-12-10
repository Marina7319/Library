import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  public books!: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onToggleFavorite(book: Book) {
    console.log('Favorite for book ', book, ' was triggered');
    book.favorite = !book.favorite;
  }
}
