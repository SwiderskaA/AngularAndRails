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
        const target = event.target;
        const newName=target.querySelector('#newName').value;
         this.Auth.updateTableName(newName).subscribe(data => {
            if(data){
              // alert("data");
             }
        });
    }
}


