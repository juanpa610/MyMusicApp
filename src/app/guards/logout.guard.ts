import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private token: TokenService, private router : Router){ }
  
  canActivate():  boolean {
    if(this.token.Token() ){   
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
