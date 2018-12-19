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
        event.preventDefault();
        const target = event.target;
        const newPosition=target.querySelector('#newPosition').value;
        const list_id=target.querySelector('#id_').value;
        if(newPosition){
            alert(newPosition);
            this.Auth.changeListPosition(newPosition,list_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    createCard(event){
        alert('thereeee');
        event.preventDefault();
        const target = event.target;
        const list_id=target.querySelector('#id_card').value;
        const name=target.querySelector('#name_card').value;
        const description=target.querySelector('#description_card').value;
        if(list_id){
            alert(list_id);
            this.Auth.createCard(list_id,name,description).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    changeCardPostion(event){
        event.preventDefault();
        const target = event.target;
        const newPosition=target.querySelector('#card_new_position').value;
        const card_id=target.querySelector('#card_id').value;
        if(newPosition){
            alert(newPosition);
            this.Auth.changeCardPosition(newPosition,card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    archiveCard(event){
        event.preventDefault();
        const target = event.target;
        const card_id=target.querySelector('#card_id_archive').value;
        if(card_id){
            this.Auth.archiveCard(card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }
}


