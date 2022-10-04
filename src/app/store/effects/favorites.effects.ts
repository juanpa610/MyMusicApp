import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { cargarFavorites, cargarFavoritesError, cargarFavoritesSuccess } from '../actions/favotites.actions';

@Injectable()
export class FavoritesEffects {
 
  cargandoFavorites$ = createEffect(() => this.actions$.pipe(
      ofType(cargarFavorites), //el oftype es la action que el effect va a escuchar
        // tap(data => console.log('effect favorites tap',data)),
        mergeMap(() => this.spotifyServices.getFavorits() // retorna toda la Data 
        .pipe(
            // tap(data => console.log('effect  favorites tap',data)),
            map(fav => cargarFavoritesSuccess({ tracksFav: fav }) ),  // aqui estoy mapeando los datos en Tracks
            catchError(err => of (cargarFavoritesError({ payload:err }) ) )
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private spotifyServices: SpotifyService
  ) {}
}