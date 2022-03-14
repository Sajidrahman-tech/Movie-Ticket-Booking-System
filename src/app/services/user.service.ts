
import { Injectable } from '@angular/core';
import {pipe, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

addUser(fname: string,lname:string,mobile:string,email:string,password:string) {
  return this.http.post("http://127.0.0.1:8080/signup",{fname:fname,lname:lname,mobile:mobile,email:email,password:password});
}

loginUser(email:string,password:string) {
  return this.http.post("http://127.0.0.1:8080/login",{email:email,password:password});
}



}
