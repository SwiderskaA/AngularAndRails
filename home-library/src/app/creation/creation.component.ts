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
        const id=target.querySelector('#idTable').value;
        if(newName){
            this.Auth.createList(newName,id).subscribe(data => {
                //there is no feedback data
            });
            alert('List created !');
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

    createTaskList(event){
        event.preventDefault();
        const target = event.target;
        const task_id=target.querySelector('#task_id').value;
        const name=target.querySelector('#task_name').value;
        if(task_id){
            this.Auth.createTaskList(name,task_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    createTask(event){
        event.preventDefault();
        const target = event.target;
        const tasklist_id=target.querySelector('#tasklist_id').value;
        const name=target.querySelector('#task_name_').value;
        if(tasklist_id){
            this.Auth.createTask(name,tasklist_id).subscribe(data => {
                //there is no feedback data
            });
        }
    }

    
}


