import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-moviebygenre',
  templateUrl: './moviebygenre.component.html',
  styleUrls: ['./moviebygenre.component.css']
})
export class MoviebygenreComponent implements OnInit{

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  movies : any[] = []
  searchValue : string = ""
  id = 1

  searchMovies(page : number = 1) {
    this.http.searchMovies(this.searchValue, page).subscribe(({results} : any) => {
      this.movies = results
      console.log('search', this.movies)
    })
  }

  getDiscover(id : number, page : number) {
  
    this.http.movieByGenre(id, page).subscribe(({results} : any) => {  
      this.movies = results
      
      console.log("Discover : ", this.movies)
      

    })
  }

  pagination(event : any) {
    if(this.searchValue) {
      this.searchMovies(event.page + 1)
      return
    }
    this.getDiscover(this.id, event.page + 1)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params : any) => 
    {
      this.id = params.id
      this.getDiscover(this.id , 1)

      console.log("name" , params.id)
    })


  }
}

