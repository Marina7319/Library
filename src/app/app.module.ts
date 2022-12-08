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
import { LoadingInterceptor } from './loading.interceptor';
import { ShelveComponent } from './book-shelve/shelve.component';
import { AddBookComponent } from './book-shelve/add-book/add-book.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    SpinnerComponent,
    AddBookComponent,
    ShelveComponent

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
    BrowserAnimationsModule,
    AngularFireModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
