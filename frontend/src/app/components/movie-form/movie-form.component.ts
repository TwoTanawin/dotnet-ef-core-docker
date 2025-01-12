import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm!: FormGroup;
  genres: string[] = ['Action', 'Comedy', 'Drama', 'Horror'];  // Example genres, replace with dynamic data if needed

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private dialogRef: MatDialogRef<MovieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; movie?: Movie }
  ) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: [this.data.movie?.title || '', Validators.required],
      genre: [this.data.movie?.genre || '', Validators.required],
      releaseDate: [this.data.movie?.releaseDate || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movie = this.movieForm.value as Movie;

      if (this.data.isEdit) {
        // Update existing movie
        this.movieService.updateMovie(this.data.movie!.id, movie).subscribe(() => this.dialogRef.close());
      } else {
        // Create a new movie
        this.movieService.createMovie(movie).subscribe(() => this.dialogRef.close());
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
