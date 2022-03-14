import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }
  loginUser(form: NgForm){
     console.log(form);

    if (form.invalid) {
      return;
    }

    this.UserService.loginUser(form.value.email,form.value.password).subscribe((data:any) => {
      localStorage.setItem('user_id', data[0].user_id);
      localStorage.setItem('mail', form.value.email);
    form.resetForm();

    });





  }
}
