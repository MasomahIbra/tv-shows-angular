import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'details/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
