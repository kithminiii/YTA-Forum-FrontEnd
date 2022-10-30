import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  postList: any;
  postId:any;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this.dataService.posts().subscribe((response:any)=>{
      this.postList = response;
    })  
  }



}
