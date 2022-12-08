import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from './auth-guard.service';
import { ShelveComponent } from './book-shelve/shelve.component';
import { AddBookComponent } from './book-shelve/add-book/add-book.component';

export const routing = RouterModule.forRoot([
    { path: '',  redirectTo:'/login', pathMatch:'full' },
    { path: 'book', component: ShelveComponent, canActivate:[AuthGuard]},
    { path: 'addBook', component: AddBookComponent, canActivate:[AuthGuard]},
    {
        path: 'signup', component: UserFormComponent
    },
    { path: '**', component: NotfoundComponent }
]);
