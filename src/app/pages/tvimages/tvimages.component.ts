import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-tvimages',
  templateUrl: './tvimages.component.html',
  styleUrls: ['./tvimages.component.css']
})
export class TvimagesComponent implements OnInit {

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  images: any[] = []
  id : number = 0


  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.id = params.id
      this.getImages(this.id)
    })
      
  }

  getImages(id: number) {
    this.http.getImagestv(id).subscribe(({backdrops}: any) => {
      this.images = backdrops
      console.log('images', backdrops)
    })
  }


}