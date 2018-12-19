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

    changeListPostion(event){
        alert('thereeee');
        event.preventDefault();
        const target = event.target;
        const newPosition=target.querySelector('#newPosition').value;
        const list_id=target.querySelector('#id_').value;
        alert('there');
        if(newPosition){
            alert(newPosition);
            this.Auth.changeListPosition(newPosition,list_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }
}


