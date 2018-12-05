import { Injectable, Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
  
    constructor(private http: HttpClient){

    }

   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-User-Email': 'test@wbt.com',
    'X-User-Token':'skZ_9MBKCbkS9mPLUi2P'
  })
};
       

     getUserDetails(username,password){
         //post these details to api server ( return user info if correct)
         return this.http.post('http://localhost:3000/sessions',{
             "email":username,"password":password
         });
     }

     registerUser(email,password){
         //there connect with proper endpoint with arguments
      //   return this.http.post('http://localhost:3000/users/signup',{
        //     "email":email,"password":password,"password_confirmation":password
       //  });
     }

}