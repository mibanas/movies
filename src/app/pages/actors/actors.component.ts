import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

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
    this.http.getActors(id).subscribe(({cast}: any) => {
      this.actors = cast
      console.log('acors', cast)
    })
  }


}

  