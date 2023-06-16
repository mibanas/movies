import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { GenreComponent } from './pages/genre/genre.component';
import { ImagesComponent } from './pages/images/images.component';
import { MoviebygenreComponent } from './pages/moviebygenre/moviebygenre.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { OnetvComponent } from './pages/onetv/onetv.component';
import { SaisonComponent } from './pages/saison/saison.component';
import { ShowmovieComponent } from './pages/showmovie/showmovie.component';
import { ShowtvComponent } from './pages/showtv/showtv.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { TvactorsComponent } from './pages/tvactors/tvactors.component';
import { TvimagesComponent } from './pages/tvimages/tvimages.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { TvsimilarComponent } from './pages/tvsimilar/tvsimilar.component';
import { TvvideosComponent } from './pages/tvvideos/tvvideos.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { VidoesComponent } from './pages/vidoes/vidoes.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent,
  },
  {
    path : "toprated",
    component : TopRatedComponent,
  },
  {
    path : "upcoming",
    component : UpcomingComponent,
  },
  {
    path : "episode/:idtv/:nbseas",
    component : OnetvComponent,
  },
  {
    path : "movies",
    component : MoviesComponent,
  },
  {
    path : "genre",
    component : GenreComponent,
    children : [
      {
        path : "genremovie/:id",
        component : MoviebygenreComponent,
      },
    ]
  },
  
  {
    path : "showmovies/:id",
    component : ShowmovieComponent,
    children : [
      {
        path : "similar",
        component : SimilarComponent,
      },
      {
        path : "actors",
        component : ActorsComponent,
      },
      {
        path : "images",
        component : ImagesComponent,
      },
      {
        path : "videos",
        component : VidoesComponent,
      },
    ]
  },
  {
    path : "tvshows",
    component : TvshowsComponent,
  },
  {
    path : "showTV/:id",
    component : ShowtvComponent,
    children : [
      {
        path : "TVsimilar",
        component : TvsimilarComponent,
      },
      {
        path : "TVactors",
        component : TvactorsComponent,
      },
      {
        path : "Tvimages",
        component : TvimagesComponent,
      },
      {
        path : "TVvideos",
        component : TvvideosComponent,
      },
      {
        path : "seasons",
        component : SaisonComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
