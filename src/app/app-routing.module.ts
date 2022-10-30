import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MainComponent } from './Components/main/main.component';
import { PostComponent } from './Components/post/post.component';
import { PostviewComponent } from './Components/postview/postview.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'main', component:MainComponent},
  {path: 'post', component:PostComponent},
  {path: 'postview/:postId', component:PostviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
