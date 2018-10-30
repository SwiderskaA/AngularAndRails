//this part of code tells angular which pieces belong to our app 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './authorization/login/login.component';
import { MenuComponent} from './menu/menu.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  FormsModule,
  RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
