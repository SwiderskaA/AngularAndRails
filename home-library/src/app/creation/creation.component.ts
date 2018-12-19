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
         this.Auth.createTable(newName).subscribe(data => {
            if(data){
              // alert("data");
             }
        });
    }

    createNewList(event){
        event.preventDefault();
        const target = event.target;
        const newName=target.querySelector('#newNameList').value;
        if(newName){
            this.Auth.createList(newName,2).subscribe(data => {
                //there is no feedback data
            });
            alert('List created !');
        }
       
    }
}


