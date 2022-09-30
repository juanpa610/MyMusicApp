import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TokenService } from 'src/app/services/token.service';
import { cargarUserData, login } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private token : TokenService, private router: Router, private store: Store<AppState>) {
    this.store.dispatch(login());
    this.store.dispatch( cargarUserData());
    this.obtenerUrl();
  }

  ngOnInit(): void {}

  obtenerUrl  () {
    this.router.navigate(['/home']);
  }
  
}
