import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  movies : any[] = []
  genreMovie : any = []
  topRated : any[] = []
  Upcoming : any[] = []

  // rating


  getmovies() {
    this.http.getMovies("popular").subscribe(({results} : any) => {  // difference entre avec et sans any
      this.movies = results
      console.log("popular" , results)
    })
  }

  getTopMovie() {
    this.http.getTopRated().subscribe(({results} : any) => {  
      this.topRated = results
      console.log("obj rated : ", this.topRated)
      console.log("rated : ", results)
    })
  }

  getUpcomingMovies() {
    this.http.getUpcoming().subscribe(({results} : any) => {  
      this.Upcoming = results
      console.log("obj Upcoming : ", this.Upcoming)
      console.log("Upcoming : ", results)
    })
  }



  ngOnInit(): void {
    this.getmovies()
    this.getTopMovie()
    this.getUpcomingMovies()
  }
}
