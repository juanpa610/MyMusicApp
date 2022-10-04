import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AppState } from '../store/app.state';
import { selectLoginUserData } from '../store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  log$ : Observable<boolean> = new Observable;
  
  constructor(private router: Router, private store: Store<AppState>,private token: TokenService){
    this.log$ =  this.store.select(selectLoginUserData)
  
  }
  
  canActivate():  boolean {
    if(this.token.Token()){  
      this.router.navigate(['/home']);
      return false;
    }else { 
      return true;
    }
  }
}
