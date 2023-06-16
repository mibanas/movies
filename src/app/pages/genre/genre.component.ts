import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  genreMovies : any[] = []

  genre() {
    this.http.genre().subscribe(({genres} : any) => {  
      this.genreMovies = genres
      console.log("genre : ", this.genreMovies)
    })
  }
  ngOnInit(): void {
    this.genre()
  }

}
