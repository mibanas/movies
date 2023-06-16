import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-showtv',
  templateUrl: './showtv.component.html',
  styleUrls: ['./showtv.component.css']
})
export class ShowtvComponent implements OnInit{

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  tv : any = []
  genres : any = []

  nbsaison : number = 0

  TvById(id : number ) {
    this.http.getTvById(id).subscribe((results : any) => {  
      this.tv = results
      this.genres = results.genres
      this.nbsaison = results.seasons.length
      console.log("saison : ", this.tv.seasons.length)
      console.log("tvbyid : ", this.tv)

    })
  }


  ngOnInit(): void {
    this.route.params.subscribe((params : any) => 
    {
      this.TvById(params.id)

      console.log("name" , params.id)
    })
    
  }
}

