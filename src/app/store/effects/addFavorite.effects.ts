import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';
import { addFavorite, addFavoriteSuccess, cargarFavoritesError } from '../actions/favotites.actions';

@Injectable()
export class AddFavoriteEffects {
  
  addFavorite$ = createEffect(() => this.actions$.pipe(
      ofType(addFavorite),
        // tap(data => console.log('effect favorites tap',data)),
        mergeMap((action : any) => {
          return this.spotifyServices.putFavoritos(action.track.id)
         .pipe(
          // tap(data => console.log('effect  favorites tap',data)),
          map(() => addFavoriteSuccess({ track : action.track }) ),
          catchError(err => of (cargarFavoritesError({ payload:err }) ) )
          )
        }
        
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private spotifyServices: SpotifyService
  ) {}
}