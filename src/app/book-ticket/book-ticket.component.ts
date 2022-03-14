import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
  theatres:any=[]
  id:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      // console.log(params['id']);
    this.getTheatres();

    });
  }
  getTheatres(){
    this.movieService.getTheatres(this.id).subscribe((data)=>{
      console.log(data);
      this.theatres = data;
    })
  }
  bookTicket(form: NgForm){
    const user_id = localStorage.getItem('user_id');
    if(user_id==null){alert("Please login");
  return;}
      this.movieService.bookTicket(user_id,form.value.theatre,this.id,form.value.ticketcount).subscribe((data)=>{
        console.log(data);
      })
  }
}
