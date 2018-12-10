import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../auth.service';
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { JsonPipe } from "@angular/common";
import {DataExchangeService} from '../../data-exchange.service';


@Component({
    selector: 'app-authorization-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    message:string;
    
     token:String;
     email:String;

    constructor(private Auth:AuthService,private data: DataExchangeService){

    }

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message)
      }
    
      newMessage() {
        this.data.changeMessage("i am sending you value of email and token !!!");
        alert('new message function');
      }

    loginUser(event){
        this.newMessage();
        event.preventDefault()
        const target = event.target;
        const username=target.querySelector('#email').value;
        const password=target.querySelector('#pwd').value;
        alert(username);
        console.log(username,password);
        this.Auth.getUserDetails(username,password).subscribe(data => {
            if(data){
              this.email=data['email'];
              this.token=data['authentication_token'];
              alert("Your token is : " + this.token + " for email "+this.email);
            }else{
                alert(data);
            }
        });
      
    }
}


