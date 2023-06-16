import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-tvsimilar',
  templateUrl: './tvsimilar.component.html',
  styleUrls: ['./tvsimilar.component.css']
})
export class TvsimilarComponent implements OnInit {

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  similarTv: any[] = []
  id : number = 0


  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.id = params.id
      this.getSimilartv(this.id, 1)
    })
      
  }

  getSimilartv(id: number, page : number) {
    this.http.getSimilartv(id, page).subscribe(({results}: any) => {
      this.similarTv = results
      console.log('similar', results)
    })
  }


  pagination(event : any) {
    console.log(event)
    // if(this.searchValue) {
    //   this.getTopMovie(event.page + 1)
    // }
    this.getSimilartv(this.id, event.page + 1)
  }
}
