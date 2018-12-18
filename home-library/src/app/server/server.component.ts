import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataExchangeService } from '../data-exchange.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    
   
    token:string='6aA-wdxX-Fzsu3Rnj5Yt'; //there token for cuurent user //so far set for tests 
    message:string;  //email of current user 
    myContent:any="so far unknown";
    tables;
    lists;
   
    constructor(private http: HttpClient,private data: DataExchangeService,private Auth:AuthService) {
  
     
     for(var element in this.tables) {
      //http.get('http://localhost:3000/tables/'+element.id+'/lists.json').subscribe(data => element.list = data);
    
     }
     
     //http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => this.books = data);
    }

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.Auth.getContentForUser('test12345@op.pl',this.token).subscribe(data => {
            if(data){
              this.myContent = data;
              
            }else{
                alert(data);
            }
        });
        
        
       //here i cant read value after logging in ! 
       //to do 
       // alert(this.myContent.values);
      }
}

interface TableDomain {
    name;
    id;
    list;
  }