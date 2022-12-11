import { OpenLibraryService } from './open-library.service';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from './book';
import { MessageService } from './services/message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenLibraryService]
})
export class AppComponent implements OnInit, OnChanges,
  OnDestroy, DoCheck, AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit {
  title = 'app works!';

  public book!: Book;
  public counter: number = 1;

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
  }

  onToggleFavorite(book: Book) {
    console.log('Favorite for stock ', book, ' was triggered')
    this.book.favorite = !this.book.favorite;
  }

  changeStockObject() {
    this.book = new Book('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80, 0);
  }

  changeStockPrice() {
    this.book.price += 10;
  }
  searchControl = new FormControl();
  results: any = [];

  isLoading = false;

  constructor(private openLibraryService: OpenLibraryService,
    public messageService: MessageService) {
  }

  ngOnInit() {
    this.openLibraryService.getOpenLibraryData()
      .subscribe(data => {
        this.isLoading = false;
        this.results = data.results;
        console.log(this.results);
      });
    this.messageService.message = 'Message Service';
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }

}
