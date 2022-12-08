import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  register(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
private baseUrl: string;

  constructor(private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) orgin: string) {
      this.baseUrl = `${origin}/api/book`;
     }
     getStock() : Observable<Book[]> { 
       return this.http.get<Book[]>(this.baseUrl);
     }
}
