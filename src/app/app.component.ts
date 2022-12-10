import { OpenLibraryService } from './open-library.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenLibraryService]
})
export class AppComponent {
  searchControl = new FormControl();
  results: any = [];

  isLoading = false;

  constructor(private openLibraryService: OpenLibraryService) { }
  
  ngOnInit() {
    this.openLibraryService.getOpenLibraryData()
      .subscribe(data => {
        this.isLoading = false;
        this.results = data.results;
        console.log(this.results);
      });
  }

}
