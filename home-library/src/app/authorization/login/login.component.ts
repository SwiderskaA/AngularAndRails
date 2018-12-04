import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../auth.service';
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { JsonPipe } from "@angular/common";


@Component({
    selector: 'app-authorization-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
     token:String;

    constructor(private Auth:AuthService){

    }

    ngOnInit(){

    }

    loginUser(event){
        event.preventDefault()
        const target = event.target;
        const username=target.querySelector('#email').value;
        const password=target.querySelector('#pwd').value;
        alert(username);
        console.log(username,password);
        this.Auth.getUserDetails(username,password).subscribe(data => {
            if(data){
              this.token=data['authentication_token'];
              alert("Your token is : " + this.token);
            }else{
                alert(data);
            }
        });

    }
}


