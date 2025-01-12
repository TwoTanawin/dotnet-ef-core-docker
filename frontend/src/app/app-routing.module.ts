import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' }, // Default route
  { path: 'movies', component: MovieListComponent }, // Movie List
  { path: 'movies/add', component: MovieFormComponent }, // Add Movie Form
  { path: 'movies/edit/:id', component: MovieFormComponent }, // Edit Movie Form
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
