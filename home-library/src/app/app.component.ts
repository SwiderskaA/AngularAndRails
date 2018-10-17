// src/app/app.component.ts
 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  books;
 
  constructor(private http: HttpClient) {
   http.get('http://localhost:3000/books.json').subscribe(data => this.books = data);
   //http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => this.books = data);
  
  }
}