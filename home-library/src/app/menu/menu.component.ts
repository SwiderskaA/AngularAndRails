import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{
   
   
   
    ngOnInit(): void {
       // throw new Error("Method not implemented.");
    }
   currentUser:String;
   //to do - getting this value from proper service
}

