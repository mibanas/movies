import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-onetv',
  templateUrl: './onetv.component.html',
  styleUrls: ['./onetv.component.css']
})
export class OnetvComponent implements OnInit{

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  episode : any[] = []
  idtv : number = 1
  idseas : number = 1

  // getepisod(page : number ) {
  //   this.http.getepisod(page, this.idtv, this.idseas).subscribe(({results} : any) => {  
  //     this.episode = results
  //     console.log("episode : ", this.episode)
  //   })
  // }

  // pagination(event : any) {
  //   console.log(event)
  //   // if(this.searchValue) {
  //   //   this.getTopMovie(event.page + 1)
  //   // }
  //   this.getepisod(event.page + 1)
  // }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      console.log('param', params.idtv, params.nbseas)

      this.http.getepisod(params.idtv, params.nbseas).subscribe(({episodes} : any) => {  
        this.episode = episodes
        console.log("episode : ", episodes)
      })
    })
}

}
