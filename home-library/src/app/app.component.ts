// src/app/app.component.ts
 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name="projektTrello"
  title = 'PAW - projekt Trello ';
  tables;
  lists;
 
  constructor(private http: HttpClient) {
   //http.get('http://localhost:3000/tables.json').subscribe(data => {
   //  this.tables = data;
     
  //});
   
   for(var element in this.tables) {
      
    //http.get('http://localhost:3000/tables/'+element.id+'/lists.json').subscribe(data => element.list = data);
  
   }
   
   //http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => this.books = data);
  }

}

interface TableDomain {
  name;
  id;
  list;
}