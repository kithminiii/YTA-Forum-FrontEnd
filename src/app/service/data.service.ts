import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../Config/config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = this.config.BASE_URL;

  constructor(
    private config: Config,
    private httpClient:HttpClient

  ) { }

  posts(){
    return this.httpClient.get(`${this.API_URL}/posts/all`)
  }

  createPost(data:any){
    return this.httpClient.post(`${this.API_URL}/posts/create`,data)
  }

  viewPost(data:any){
    return this.httpClient.post(`${this.API_URL}/posts/single`, data)
  }

  createComment(data:any){
    return this.httpClient.post(`${this.API_URL}/comments/create`,data)
  }

  viewComment(data:any){
    return this.httpClient.post(`${this.API_URL}/comments/all`,data)
  }


}


