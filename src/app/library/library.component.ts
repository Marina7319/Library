
import { filter } from 'rxjs';
import { OpenLibraryService } from '../open-library.service';
import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
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
