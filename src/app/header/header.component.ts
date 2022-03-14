import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  mail:any;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user_id')){
      this.loggedIn = true;
      this.mail = localStorage.getItem('mail');
    }
  }

}
