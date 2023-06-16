import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {

  myWidth = 90

  seasons : any[] = []
  tv : any = []
  idtv : number = 0
  genres : any = []

  nbsaison : number = 0
  constructor(private http : ApimovieService, private route : ActivatedRoute, private sanitizer : DomSanitizer) {}

  ngOnInit(): void {

   

    this.route.parent?.params.subscribe((params: any) => {
      this.idtv = params.id
      console.log('param', params.id)
      this.getSeason(params.id)

      this.http.getTvById(params.id).subscribe((results : any) => {  
        this.tv = results
        this.genres = results.genres
        this.nbsaison = results.seasons.length
        console.log("saison : ", this.tv.seasons.length)
        console.log("tvbyid : ", this.tv)
  
      })

    })
      
  }

  

  getSeason(id: number) {
    this.http.getseason(id, 1).subscribe((results: any) => {
      this.seasons = results
      console.log('season', results)
    })
  }



}