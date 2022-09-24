import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyGuard implements CanActivate {
  
  constructor(private token: TokenService){}
  
  canActivate():  boolean {
    return true;
    // return this.token.removeToken();
  }
  
}
