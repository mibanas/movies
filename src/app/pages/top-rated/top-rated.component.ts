import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  topRated : any[] = []

  getTopMovie(page : number = 1) {
    this.http.getTopRated(page).subscribe(({results} : any) => {  
      console.log("Page : ", page)
      this.topRated = results
      console.log("obj rated : ", this.topRated)
    })
  }

  pagination(event : any) {
    console.log(event)
    // if(this.searchValue) {
    //   this.getTopMovie(event.page + 1)
    // }
    this.getTopMovie(event.page + 1)
  }

  ngOnInit(): void {
    this.getTopMovie()
  }
}
