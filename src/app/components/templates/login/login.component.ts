import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../../store/actions/user.actions';
import { AppState } from '../../../store/app.state';
import { environment } from 'src/environments/environment';   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(  private store: Store<AppState>) { 
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    const url = `${environment.endpoint}?client_id=${environment.clientId}&response_type=token&redirect_uri=${encodeURIComponent(environment.redirectUri)}&scope=${environment.scope}&show_dialog=true`;
    window.location.href = url;
    // this.store.dispatch(cargarUserData())
    this.store.dispatch(login())
  }


  

}
