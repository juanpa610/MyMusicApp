import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(cargarFavorites());
  }

}
