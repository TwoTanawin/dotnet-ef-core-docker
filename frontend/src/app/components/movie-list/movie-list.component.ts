import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie, MovieService } from '../../services/movie.service';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  displayedColumns: string[] = ['id', 'title', 'genre', 'releaseDate', 'actions'];

  constructor(private movieService: MovieService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  openCreateForm(): void {
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '400px',
      data: { isEdit: false }
    });

    dialogRef.afterClosed().subscribe(() => this.loadMovies());
  }

  editMovie(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '400px',
      data: { isEdit: true, movie }
    });

    dialogRef.afterClosed().subscribe(() => this.loadMovies());
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe(() => this.loadMovies());
  }
}
