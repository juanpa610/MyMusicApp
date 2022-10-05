import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';
import { cargarUserData, cargarUserDataError, cargarUserDataSuccess } from '../actions/user.actions';

@Injectable()
export class UserDataEffects {
 
  cargandoUserData$ = createEffect(() => this.actions$.pipe(
      ofType(cargarUserData),
        // tap(data => console.log('effect user data tap',data)),
        mergeMap(() => this.spotifyServices.getUser()
        .pipe(
            // tap(data => console.log('effect user data  tap',data)),
            map(use => cargarUserDataSuccess({ userData: use }) ),
            catchError(err => of (cargarUserDataError({ payload:err }) ) )
            )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private spotifyServices: SpotifyService
  ) {}
}