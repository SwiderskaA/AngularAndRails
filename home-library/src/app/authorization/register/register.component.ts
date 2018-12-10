import { Component } from "@angular/core";
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-authorization-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent{


   constructor(private Auth:AuthService){

   }

   ngOnInit(){

   }

   registerNewUser(event){
       event.preventDefault();
       const target = event.target;
      const username=target.querySelector('#email').value;
      const password=target.querySelector('#pswd1').value;
      const passwordConfirmation=target.querySelector('#pswd2').value;
      alert("You try to register user : " + username+ " with password " +password);
      //there should be executed service method of register !!! TO DO 

   }
}


