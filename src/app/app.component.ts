import { Component } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie';
}

//
// let password:string
// let flag=0;
// for(let i=0;i<password.length;i++)
// {
//   if(password[i]==)
//   {
//     flag=1;
//   }
//   else{

//   }

// }
// if(flag==1)
// {
//   console.log("this has special character");
// }
// ///



// select  MAX(price) from table where price(select MAX(price) from table)







