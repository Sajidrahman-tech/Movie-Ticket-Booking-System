import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any=[]
  constructor(private moviesService:MovieService) { }

  ngOnInit() {
    this.fetchMovies();
  }
  fetchMovies(){
    this.moviesService.getMovies().subscribe((movies:any) => {
      console.log(movies);
      this.movies = movies;
    });
  }
}
