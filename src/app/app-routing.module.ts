import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';
import { TheatresComponent } from './theatres/theatres.component';

const routes: Routes = [
{path:'',component:MoviesComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'theatres',component:TheatresComponent},
{ path: 'bookticket/:id', component: BookTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
