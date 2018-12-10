import { Component, OnInit } from "@angular/core";
import{ DataExchangeService} from "../data-exchange.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{
   
    message:string;
   
   constructor(private data: DataExchangeService){
       
   }
   ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  
}

