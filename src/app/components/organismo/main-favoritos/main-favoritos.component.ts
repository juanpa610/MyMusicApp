import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { selectTracksFavorites } from '../../../store/selectors/favorites.selectors';

@Component({
  selector: 'app-main-favoritos',
  templateUrl: './main-favoritos.component.html',
  styleUrls: ['./main-favoritos.component.scss']
})
export class MainFavoritosComponent implements OnInit, OnDestroy{

  misFavoritos: any = [];
  cargando: boolean = false;
  error: any;

  subcriptionFavorite!: Subscription; 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.subcriptionFavorite = this.store.select(selectTracksFavorites).subscribe( (playlist)=>{ this.misFavoritos= playlist; });
  }

  ngOnDestroy(): void {
    this.subcriptionFavorite.unsubscribe();
  }

}
