import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books!: Book[];
  constructor() {
    this.books = [
      new Book('The Enchanted April', 'BOOK', 85, 80, 45),
      new Book('A Room with a View', 'MAGAZINE', 10, 20, 55),
      new Book('Middlemarch', 'ARTICLE', 876, 765, 55),
    ];
  }

  getBooks(): Book[] {
    return this.books;
  }

  createBook(book: Book) {
    let foundBook = this.books.find(each => each.id === book.id);
    if (foundBook) {
      return false;
    }
    this.books.push(book);
    return true;
  }

  toggleFavorite(book: Book) {
    let foundBook = this.books.find(each => each.id === book.id);
    foundBook.favorite = !foundBook.favorite;
  }

}

  function ObservableThrow(arg0: { msg: string; }, arg1: number) {
    throw new Error('Function not implemented.');
  }

function ObservableOf(arg0: { msg: string; }) {
  throw new Error('Function not implemented.');
}

