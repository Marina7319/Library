import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {
  SimpleChanges, OnChanges,
  OnDestroy, DoCheck, AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit
} from '@angular/core';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit, OnChanges,
                                          OnDestroy, DoCheck,
                                          AfterViewChecked, AfterViewInit,
                                          AfterContentChecked, AfterContentInit 
  {
  counter = 1;
  @Input() public book!: Book;
  @Output() private toggleFavorite: EventEmitter<Book>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Book>();
  }

  onToggleFavorite(event: any) {
    this.toggleFavorite.emit(this.book);
  } 

  ngOnInit(): void {
   this.book = new Book('Book -' + (this.counter)++, 'BOOK', 15, 20, 38);
    console.log('Item Component - On Init');
  }

  ngAfterViewInit(): void { 
    console.log('Book Title - After View Init');
  }
  ngAfterViewChecked(): void { 
    console.log('Book Title - After View Checked');
  }

  ngAfterContentInit(): void { 
    console.log('Book Title - After Content Init');
  }

  ngAfterContentChecked(): void { 
    console.log('Book Title - After Content Checked');
  }

  ngDoCheck(): void { 
    console.log('Book Title - Do Check');
  }

  ngOnDestroy(): void { 
    console.log('Book Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void { 
    console.log('Book Title - On Changes - ', changes);
  }
  
}
