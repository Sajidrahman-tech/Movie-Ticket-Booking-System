import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get("http://127.0.0.1:8080/getMovies");
  }
  getTheatres(id:any){
    return this.http.post("http://127.0.0.1:8080/getTheatres",{id:id});
  }
  bookTicket(user_id:any,theatre_id:any,movie_id:any,ticketcount:any){
    return this.http.post("http://127.0.0.1:8080/bookTicket",{user_id:user_id,theatre_id:theatre_id,movie_id:movie_id,ticketcount:ticketcount});
  }
}
