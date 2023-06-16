import { Component, OnInit } from '@angular/core';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit{

  constructor(private http : ApimovieService) {}

  upComing : any[] = []

  getupComing(page : number = 1) {
    this.http.getUpcoming(page).subscribe(({results} : any) => {  
      this.upComing = results
      console.log("obj rated : ", this.upComing)
    })
  }

  pagination(event : any) {
    console.log(event)
    // if(this.searchValue) {
    //   this.getTopMovie(event.page + 1)
    // }
    this.getupComing(event.page + 1)
  }

  ngOnInit(): void {
    this.getupComing()
  }
}
