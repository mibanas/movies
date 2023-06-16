import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  similarMovies: any[] = []
  id : number = 0


  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.id = params.id
      this.getSimilar(this.id, 1)
    })
      
  }

  getSimilar(id: number, page : number) {
    this.http.getSimilarMovies(id, page).subscribe(({results}: any) => {
      this.similarMovies = results
      console.log('similar', results)
    })
  }


  pagination(event : any) {
    console.log(event)
    // if(this.searchValue) {
    //   this.getTopMovie(event.page + 1)
    // }
    this.getSimilar(this.id, event.page + 1)
  }
}
