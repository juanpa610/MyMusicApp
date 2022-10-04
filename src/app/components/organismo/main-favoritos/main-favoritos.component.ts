import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCargandoFav, selectTracksFavorites } from 'src/app/store/selectors/favorites.selectors';

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
