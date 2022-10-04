import { Component } from '@angular/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { cargarUserData } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyMusicApp';

  // constructor(private store: Store<AppState>){
  //   this.store.dispatch( cargarUserData());
  // }

}
