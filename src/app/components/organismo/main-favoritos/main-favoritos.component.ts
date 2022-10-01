import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-main-favoritos',
  templateUrl: './main-favoritos.component.html',
  styleUrls: ['./main-favoritos.component.scss']
})
export class MainFavoritosComponent implements OnInit, OnDestroy{

  misFavoritos: ReadonlyArray<any> = [];
  cargando: boolean = false;
  error: any;

  subcriptionFavorite!: Subscription; 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    
    this.subcriptionFavorite= this.store.select('favorites').subscribe( ({tracksFav, cargando, error }) => {
      this.misFavoritos = tracksFav;
      this.cargando = cargando;
      this.error    = error;
        
    })
   
    this.store.dispatch( cargarFavorites());
  }

  ngOnDestroy(): void {
    this.subcriptionFavorite.unsubscribe();
  }


}
