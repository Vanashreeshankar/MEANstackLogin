import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http:HttpClient) { }

  signup(body:any){
    return this._http.post('http://127.0.0.1:5000/users/signup', body,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  login(body:any){
    return this._http.post('http://127.0.0.1:5000/users/login', body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  

  logout(){
    return this._http.get('http://127.0.0.1:5000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
}
