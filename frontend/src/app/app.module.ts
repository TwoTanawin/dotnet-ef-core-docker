import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For Material animations
import { MatToolbarModule } from '@angular/material/toolbar'; // Material Toolbar
import { MatButtonModule } from '@angular/material/button'; // Material Buttons
import { MatCardModule } from '@angular/material/card'; // Material Cards
import { MatInputModule } from '@angular/material/input'; // Material Input
import { HttpClientModule } from '@angular/common/http'; // For API calls

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // For forms
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for Material animations
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
