import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';

import { TokenService } from '../services/token.service';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyGuard implements CanActivate {

  log : boolean = false;
  
  constructor(private token: TokenService, private router : Router,private store: Store<AppState>){}
  
  canActivate():  boolean {
    if(!this.token.Token()){   
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
