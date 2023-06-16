import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-tvvideos',
  templateUrl: './tvvideos.component.html',
  styleUrls: ['./tvvideos.component.css']
})
export class TvvideosComponent implements OnInit {

  videos : any[] = []
  constructor(private http : ApimovieService, private route : ActivatedRoute, private sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getVideos(params.id)
    })
      
  }

  getVideos(id: number) {
    this.http.getVideosTv(id).subscribe(({results}: any) => {
      this.videos = results
      console.log('video', results)
    })
  }

  safeUrl(url : string) {
    console.log("url : ", url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`)
  }


}
