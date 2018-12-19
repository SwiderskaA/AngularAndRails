import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})


export class ManagementComponent {
  constructor(private Auth:AuthService){

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