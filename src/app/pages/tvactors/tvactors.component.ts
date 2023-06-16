import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-tvactors',
  templateUrl: './tvactors.component.html',
  styleUrls: ['./tvactors.component.css']
})
export class TvactorsComponent implements OnInit {

  constructor(private http : ApimovieService, private route : ActivatedRoute) {}

  actors: any[] = []
  id : number = 0


  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.id = params.id
      this.getActors(this.id)
    })
      
  }

  getActors(id: number) {
    this.http.getActorsTV(id).subscribe(({cast}: any) => {
      this.actors = cast
      console.log('acors', cast)
    })
  }


}