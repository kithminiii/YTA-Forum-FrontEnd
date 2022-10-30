import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  title: string = "";
  description: string = "";
  postId: any;
  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = "";
  postStatus: any;
  postSingle:any;
  comment: string="";
  Status: any;
  commentStatus: any;
  route: any;
  queryParam:any;
  param:any;
  postview: any;
  find:any;
  singlePost:any;
  commentList:any;
  

  constructor(
    private dataService: DataService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.postId = params.get("postId"); 
      this.viewPost();  
      this.createComment(); 
      this.viewComment();
    });
  }

  viewPost(){
    if(this.postId != "" ){
        var formData = {
          postId: this.postId
        }
      this.dataService.viewPost(formData).subscribe((response:any)=>{
        this.singlePost = response;
      })
    }
  }

  createComment(){
    if(this.comment != ""  ){
      var data= {
          comment: this.comment,
          postId:this.postId
      }     
   
      this.dataService.createComment(data).subscribe((response:any)=>{
        if(response.status == 0){
          this.message = "Comment failed";
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
            this.message= "";
          }, 3000);
        }else if(response.status == 1){
          this.message = "Comment Submitted";
          this.isSuccess = true;
          localStorage.setItem('isCommentedIn','true');
          setTimeout(() => {
            this.isSuccess = true;
            this.message = "";
            location.reload();
          }, 3000);
        }
      })
    }
  }

  viewComment(){
    if(this.postId != "" ){
      var data = {
        postId: this.postId
      }
    this.dataService.viewComment(data).subscribe((response:any)=>{
      this.commentList = response;
    })
  }
}
}
