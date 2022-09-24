import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isAutemtifing: boolean = true;

  constructor() { }

  setToken(token : string) {
    if(token != undefined){
      localStorage.setItem('token', token);
    }
  }

  getToken(){
    return window.localStorage.getItem('token');
  }

  isaut(){
    // removeToken(isAutemtifing : boolean){
    //   localStorage.removeItem('token');
      
    //   return this.isAutemtifing;
      
    // }
  }
  

}
