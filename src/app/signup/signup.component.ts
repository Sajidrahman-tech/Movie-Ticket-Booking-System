import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  constructor(public userService: UserService) { }


  onAddUser(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.userService.addUser(form.value.fname,form.value.lname,form.value.mobile,form.value.email,form.value.password).subscribe((data) => {
      console.log(data);
    });
    form.resetForm();

  }



  ngOnInit(): void {
  }

}
