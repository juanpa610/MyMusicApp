import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { cargarFavorites, cargarFavoritesError, cargarFavoritesSuccess } from '../actions/favotites.actions';

@Injectable()
export class FavoritesEffects {
 
  cargandoFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarFavorites),
        // tap(data => console.log('effect favorites tap',data)),
        mergeMap(() => this.spotifyServices.getFavorits()
        .pipe(
            // tap(data => console.log('effect  favorites tap',data)),
            map(fav => cargarFavoritesSuccess({ tracks: fav }) ),
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