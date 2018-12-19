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

    updateTableName(event){ 
        event.preventDefault();
        const target = event.target;
        const id=target.querySelector('#table_id_update').value;
        const newName=target.querySelector('#table_name_update').value;
         this.Auth.updateTableName(id,newName).subscribe((res: Response) => {
            const data= res.json();
          });
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

    copyCard(event){
        event.preventDefault();
        const target = event.target;
        const card_id=target.querySelector('#card_id_copy').value;
        if(card_id){
            this.Auth.copyCard(card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    observeCard(event){
        event.preventDefault();
        const target = event.target;
        const card_id=target.querySelector('#card_id_observe').value;
        if(card_id){
            this.Auth.observeCard(card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    addComment(event){
        event.preventDefault();
        const target = event.target;
        const card_id=target.querySelector('#card_id_comment').value;
        const comment=target.querySelector('#comment').value;
        if(card_id){
            this.Auth.addComment(comment,card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }


    deleteComment(event){
        event.preventDefault();
        const target = event.target;
        const card_id=target.querySelector('#comment_id').value;
        if(card_id){
            this.Auth.deleteComment(card_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }
}


