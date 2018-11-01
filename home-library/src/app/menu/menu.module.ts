
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { AppComponent } from '../app.component';
import { ServerComponent } from '../server/server.component';
import { LoginComponent } from '../authorization/login/login.component';


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
      MenuComponent,
      AppComponent,
      ServerComponent,
      LoginComponent
    ],
    imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    ],
    exports: [RouterModule],
    providers: []
  })

  export class MenuModule { }