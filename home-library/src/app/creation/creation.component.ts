import { Component } from "@angular/core";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.css']
})

export class CreationComponent{

    constructor(private Auth:AuthService){

    }
    createNewTable(event){
        event.preventDefault();
         this.Auth.createTable('dupa6666123455').subscribe(data => {
            if(data){
               alert("data");
             }else{
                alert("none");
        }
        });
    }
}


