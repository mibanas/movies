import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  movies : any[] = []
  searchValue : string = ""

  searchMovies(page : number = 1) {
    this.http.searchMovies(this.searchValue, page).subscribe(({results} : any) => {
      this.movies = results
      console.log('search', this.movies)
    })
  }

  getPopular(page : number = 1) {
    this.http.getMovies("popular", page).subscribe(({results} : any) => {  
      this.movies = results
      console.log("popular : ", this.movies)
    })
  }

  pagination(event : any) {
    if(this.searchValue) {
      this.searchMovies(event.page + 1)
      return
    }
    this.getPopular(event.page + 1)
  }

  ngOnInit(): void {
    this.getPopular()
  }
}
