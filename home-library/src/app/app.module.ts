//this part of code tells angular which pieces belong to our app 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { MenuComponent} from './menu/menu.component';
import { TableComponent} from './table/table.component';
import { ManagementComponent} from './management/management.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'content',
    component:ServerComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'management',
    component:ManagementComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    MenuComponent,
    TableComponent,
    RegisterComponent,
    ManagementComponent
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
