
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book/book-item/book-item.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from './auth-guard.service';
import { ShelveComponent } from './book-shelve/shelve.component';
import { AddBookComponent } from './book-shelve/add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { Unsaved } from './unsaved.service';
import { CreateBookComponent } from './book/create-book/create-book.component';

export const routing = RouterModule.forRoot([
    { path: 'book', component: ShelveComponent, canActivate:[AuthGuard]},
    { path: 'addBook', component: AddBookComponent, canActivate:[AuthGuard]},
    { path: 'listBook', component: BookListComponent, canActivate:[AuthGuard]},
    { path: 'signup', component: LoginComponent, canDeactivate: [Unsaved]},
    { path: 'register', component: UserFormComponent},
    { path: 'addTitle', component: CreateBookComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: NotfoundComponent }
]);
