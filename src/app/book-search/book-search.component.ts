import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  searchControl = new FormControl();

  constructor() { 
    this.searchControl.valueChanges.subscribe(value => { 
      console.log(value);
    });
  }
}
