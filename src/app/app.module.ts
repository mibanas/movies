import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowmovieComponent } from './pages/showmovie/showmovie.component';
import { FormsModule } from '@angular/forms';
import { GenreComponent } from './pages/genre/genre.component';
import { MoviebygenreComponent } from './pages/moviebygenre/moviebygenre.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ImagesComponent } from './pages/images/images.component';
import { VidoesComponent } from './pages/vidoes/vidoes.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { ShowtvComponent } from './pages/showtv/showtv.component';
import { TvsimilarComponent } from './pages/tvsimilar/tvsimilar.component';
import { TvactorsComponent } from './pages/tvactors/tvactors.component';
import { TvimagesComponent } from './pages/tvimages/tvimages.component';
import { TvvideosComponent } from './pages/tvvideos/tvvideos.component';
import { SaisonComponent } from './pages/saison/saison.component';
import { OnetvComponent } from './pages/onetv/onetv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TopRatedComponent,
    GenreComponent,
    UpcomingComponent,
    MoviesComponent,
    MoviebygenreComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    VidoesComponent,
    ShowmovieComponent,
    TvshowsComponent,
    ShowtvComponent,
    TvsimilarComponent,
    TvactorsComponent,
    TvimagesComponent,
    TvvideosComponent,
    SaisonComponent,
    OnetvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
