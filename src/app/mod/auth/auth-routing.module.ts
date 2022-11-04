import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"auth", component:AuthComponent, children:[
      {path:"login", component:LoginComponent},
      {path:"signup", component:SignupComponent},
      {path:"", redirectTo:"/login", pathMatch:"full"}
    ]
  },
  //{path:"**", redirectTo:"/auth/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
