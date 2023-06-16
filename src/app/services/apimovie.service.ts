import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApimovieService {

  constructor(private http : HttpClient) { }

  apiKey : string = "?api_key=a5b6818d8201ee49aff8d3a8199a6d74"
  baseUrl : string = "https://api.themoviedb.org/3"

  getMovies(option : string, page : number = 1) {
    return this.http.get(`${this.baseUrl}/movie/${option}${this.apiKey}&page=${page}`)
    // returner un observable
  }


  getMoviesByid(id : number) {
    return this.http.get(`${this.baseUrl}/movie/${id}${this.apiKey}`)
    // returner un observable
  }

  getTopRated(page : number = 1) {
    // return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a5b6818d8201ee49aff8d3a8199a6d74&language=en-US&page=2")
    return this.http.get(`${this.baseUrl}/movie/top_rated${this.apiKey}&language=en-US&page=${page}`)

  }

  

  getUpcoming(page : number = 1) {
    // return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=a5b6818d8201ee49aff8d3a8199a6d74&language=en-US&page=1")
    return this.http.get(`${this.baseUrl}/movie/upcoming${this.apiKey}&language=en-US&page=${page}`)
  }

  searchMovies(query : string, page : number) {
    return this.http.get(`${this.baseUrl}/search/movie${this.apiKey}&query=${query}&page=${page}`)
    // returner un observable
  }

  genre() {
    return this.http.get(`${this.baseUrl}/genre/movie/list${this.apiKey}&language=en-US`)
  }

  movieByGenre(id : number, page : number) {
    console.log("genre service" , id)
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=a5b6818d8201ee49aff8d3a8199a6d74&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`)

  }

  getSimilarMovies(id : any, page : number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a5b6818d8201ee49aff8d3a8199a6d74&page=${page}`)

  }

  getImagesMovies(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

  getActors(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

  getVideos(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }



  getTvsShows(page : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=a5b6818d8201ee49aff8d3a8199a6d74&page=${page}`)
  }

  getTvById(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)

  }

  getSimilartv(id : any, page : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=a5b6818d8201ee49aff8d3a8199a6d74&page=${page}`)
  }

  getActorsTV(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

  getImagestv(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/images?api_key=a5b6818d8201ee49aff8d3a8199a6d74
    `)
  }
  getVideosTv(id : number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

  getseason(id : number, season_number : number ) {
    return this.http.get(`  https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

  getepisod(idtv : number, idseas : number ) {
    return this.http.get(`  https://api.themoviedb.org/3/tv/${idtv}/season/${idseas}?api_key=a5b6818d8201ee49aff8d3a8199a6d74`)
  }

}

