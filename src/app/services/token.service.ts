import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isAutemtifing: string ='';

  constructor() {}

  Token(){
    if(window.location.hash){
      const url_token= window.location.hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem('token', url_token);
    }
    
    return !!window.localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeToken(){
    localStorage.removeItem('token');
  }

}
