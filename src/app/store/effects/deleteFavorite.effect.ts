import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { deleteFavorite, deleteFavoriteSuccess } from '../actions/favotites.actions';

@Injectable()
export class DeleteFavoriteEffects {
 
  deleteFavorite$ = createEffect(() => this.actions$.pipe(
      ofType(deleteFavorite),
        // tap(data => console.log('effect favorites tap',data)),
        mergeMap((action: any) => this.spotifyServices.deleteFavoritos(action.id)
          .pipe(
              // tap(data => console.log('effect  favorites tap',data)),
              map(() => deleteFavoriteSuccess({ id : action.id }) ),
              // catchError(err => of (cargarFavoritesError({ payload:err }) ) )
          )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private spotifyServices: SpotifyService
  ) {}
}