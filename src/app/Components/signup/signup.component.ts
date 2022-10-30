import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  message: string = "";
  isError: boolean = false;
  isSuccess: boolean = false;
  regStatus: any;

  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
  }

  signup(){
    if(this.userName != "" && this.password != "" && this.email != "" ){
      var formData = {
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
        
      }
      this.authService.signup(formData).subscribe((res:any)=>{
        if(res.status == 0){
          this.message = "Registration failed";
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
            this.message= "";
          }, 3000);
        }else if(res.status == 1){
          this.message = "Successfully Registered";
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
