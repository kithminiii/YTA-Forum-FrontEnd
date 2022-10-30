import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "";
  description: string = "";
  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = "";
  postStatus: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.postStatus = localStorage.getItem("isPostedIn");
   if(this.postStatus == true){

   }
  }

  createPost(){
    if(this.title != "" && this.description != "" ){
      var formData= {
          title: this.title,
          description:this.description,
          isDraft:0
      }
      this.dataService.createPost(formData).subscribe((response:any)=>{
        if(response.status == 0){
          this.message = "Submission failed";
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
            this.message= "";
          }, 3000);
        }else if(response.status == 1){
          this.message = "Successfully Submitted";
          this.isSuccess = true;
          localStorage.setItem('isPostedIn','true');
          setTimeout(() => {
            this.isSuccess = true;
            this.message = "";
            location.href="/main";
          }, 3000);

        }
      })
    }
    else{
      this.isError = true;
      this.message = "Required fields are missing";
      setTimeout(() => {
        this.isError = false;
        this.message = "";
      }, 3000);
    }
  }

}
