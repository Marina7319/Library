import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  constructor(private http: HttpClient) { }

  getOpenLibraryData() {
    return this.http.get("https://gutendex.com/books")
      .pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
}
