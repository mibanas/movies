import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  tvShows : any[] = []
  searchValue : string = ""

  searchTvs(page : number = 1) {
    // this.http.searchTVs(this.searchValue, page).subscribe(({results} : any) => {
    //   this.tvShows = results
    //   console.log('search tv', this.tvShows)
    // })
  }

  getLastTv(page : number = 1) {
    this.http.getTvsShows(page).subscribe(({results} : any) => {  
      this.tvShows = results
      console.log("last tv : ", this.tvShows)
    })
  }

  pagination(event : any) {
    // if(this.searchValue) {
    //   this.searchTVs(event.page + 1)
    //   return
    // }
    this.getLastTv(event.page + 1)
  }

  ngOnInit(): void {
    this.getLastTv()
  }
}
