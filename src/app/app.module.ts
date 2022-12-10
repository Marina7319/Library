import { libraryRouting } from './library/library.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LibraryModule } from './library/library.module';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShelveComponent } from './book-shelve/shelve.component';
import { AddBookComponent } from './book-shelve/add-book/add-book.component';
import { LoadingInterceptor } from './loading.interceptor';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { BookItemComponent } from './book/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    SpinnerComponent,
    AddBookComponent,
    ShelveComponent,
    BookItemComponent,
    CreateBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LibraryModule,
    UserModule,
    FormsModule,
    libraryRouting,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



