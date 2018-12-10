import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataExchangeService } from '../data-exchange.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    message:string;  //there will be email 
    tables;
    lists;
   
    constructor(private http: HttpClient,private data: DataExchangeService) {
     http.get('http://localhost:3000/tables.json').subscribe(data => {
      this.tables = data;
    });
     
     for(var element in this.tables) {
      //http.get('http://localhost:3000/tables/'+element.id+'/lists.json').subscribe(data => element.list = data);
    
     }
     
     //http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => this.books = data);
    }

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message)
      }
}

interface TableDomain {
    name;
    id;
    list;
  }