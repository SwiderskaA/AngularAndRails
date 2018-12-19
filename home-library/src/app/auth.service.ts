import { Injectable, Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    

    constructor(private http: HttpClient){

    }

  baseUrl = 'http://localhost:3000/tables';
       

     getUserDetails(username,password){
         //post these details to api server ( return user info if correct)
         return this.http.post('http://localhost:3000/sessions',{
             "email":username,"password":password
         });
     }

     registerUser(email,password){
     
        //sending input values to backend server 
       return this.http.post('http://localhost:3000/user',{
           "email":email,"password":password,"password_confirmation":password
       });
     }

     getContentForUser(email,token){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-User-Email': 'test12345@op.pl',
                'X-User-Token': '6aA-wdxX-Fzsu3Rnj5Yt'
              })
          };

        return this.http.get('http://localhost:3000/tables/', httpOptions
        );
     }

     createTable(tableName){ //this works 
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-User-Email': 'test12345@op.pl',
              'X-User-Token': '6aA-wdxX-Fzsu3Rnj5Yt'
            })
          };

        return this.http.post('http://localhost:3000/tables',{
            "name":tableName
        },httpOptions);
     }

     createList(list_name,table_id){  //this works 
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-User-Email': 'test12345@op.pl',
              'X-User-Token': '6aA-wdxX-Fzsu3Rnj5Yt'
            })
          };

        return this.http.post('http://localhost:3000/lists',{
            "name":list_name,"table_id":table_id
        },httpOptions);
     }

     updateTableName(newName){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-User-Email': 'test12345@op.pl',
              'X-User-Token': '6aA-wdxX-Fzsu3Rnj5Yt'
            })
          };

        return this.http.put('http://localhost:3000/tables/3' ,{
        "name":"testowazmiana"
        },httpOptions);
     }
    
    }

