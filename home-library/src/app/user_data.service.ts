import { Injectable, Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class UserDataService {
  
    constructor(private http: HttpClient){
        
    }

   // getUserTables(email,token){     
      //      return this.http.post('http://localhost:3000/tables',{
       //     "X-User-Email":email,"X-User-Token":token
     //   });
  //  }

}