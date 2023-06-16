import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css']
})
export class ShowmovieComponent implements OnInit{

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  movies : any = []
  genre : any = []


  getMovieById(id : number ) {
    this.http.getMoviesByid(id).subscribe((results : any) => {  
      this.movies = results
      this.genre = results.genres
      console.log("moviebyid : ", this.movies)

    })
  }


  ngOnInit(): void {
    this.route.params.subscribe((params : any) => 
    {
      this.getMovieById(params.id)

      console.log("name" , params.id)
    })
    
  }
}
