import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Components/main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostComponent } from './Components/post/post.component';
import { Config } from './Config/config';
import { PostviewComponent } from './Components/postview/postview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    PostComponent,
    PostviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
