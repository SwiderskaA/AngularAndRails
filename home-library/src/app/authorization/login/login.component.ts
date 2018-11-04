import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-authorization-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    constructor(){

    }

    ngOnInit(){

    }

    loginUser(event){
        event.preventDefault()
        const target = event.target
        const username=target.querySelector('#email').value
        const password=target.querySelector('#pwd').value
        alert(username)
        console.log(username,password)
    }
}


