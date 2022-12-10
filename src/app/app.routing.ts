import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from './auth-guard.service';
import { ShelveComponent } from './book-shelve/shelve.component';
import { AddBookComponent } from './book-shelve/add-book/add-book.component';
import { HomeComponent } from './home/home.component';

export const routing = RouterModule.forRoot([
    { path: 'book', component: ShelveComponent, canActivate:[AuthGuard]},
    { path: 'addBook', component: AddBookComponent, canActivate:[AuthGuard]},
    {path: 'signup', component: LoginComponent},
    {path: 'register', component: UserFormComponent},
    {path: '', component: HomeComponent},
    { path: '**', component: NotfoundComponent }
]);
