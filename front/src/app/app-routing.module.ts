import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { BookDescriptionComponent } from './book-description/book-description.component';

const routes: Routes = [
  {path: '', component: BookComponent, canActivate:[AuthGuardService]},
  {path: 'book/:id', component: BookDescriptionComponent, canActivate:[AuthGuardService]},
  {path: 'addbook', component: AddBookComponent, canActivate:[AuthGuardService]},
  {path: 'users', component: UserComponent, canActivate:[AuthGuardService]},
  {path: 'adduser', component: AddUserComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
