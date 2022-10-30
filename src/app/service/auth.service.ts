import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../Config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = this.config.BASE_URL;

  constructor(
    private config : Config,
    private httpClient : HttpClient
  ) { }

  login(data:any){
    return this.httpClient.post(`${this.API_URL}/auth/login`,data)
  }

  signup(data:any){
    return this.httpClient.post(`${this.API_URL}/auth/register`,data)
  }

}
