import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  message: string = "";
  isError: boolean = false;
  isSuccess: boolean = false;
  loginStatus: any;


  constructor(
    private authService : AuthService,

  ) { }

  ngOnInit(): void {
   this.loginStatus = localStorage.getItem("isLoggedIn");
   if(this.loginStatus == "true"){
     location.href = "/main"
   }
  }

  login(){
    if(this.userName != "" && this.password != "" ){
      var formData = {
        userName: this.userName,
        password: this.password
      }
      this.authService.login(formData).subscribe((response:any)=>{
        if(response.status == 0){
          this.message = "Login failed";
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
            this.message= "";
          }, 3000);
        }else if(response.status == 1){
          this.message = "Successfully logged in";
          this.isSuccess = true;
          localStorage.setItem('isLoggedIn','true');
          setTimeout(() => {
            this.isSuccess = true;
            this.message = "";
            location.href="/main";
          }, 3000);

        }
      })
    }else{
      this.isError = true;
      this.message = "Required fields are missing";
      setTimeout(() => {
        this.isError = false;
        this.message = "";
      }, 3000);
    }
  }
}
