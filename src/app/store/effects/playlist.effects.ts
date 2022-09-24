import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { cargarPlaylist, cargarPlaylistError, cargarPlaylistSuccess } from '../actions/playlist.actions';
 
@Injectable()
export class PlaylistEffects {
 
  cargandoPlaylist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarPlaylist),
        // tap(data => console.log('effect  tap',data)),
        mergeMap(() => this.spotifyServices.getPlaylist()
        .pipe(
            // tap(data => console.log('effect  tap',data)),
            map(play => cargarPlaylistSuccess({ playlist:play }) ),
            catchError(err => of (cargarPlaylistError({ payload:err }) ) )
            )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private spotifyServices: SpotifyService
  ) {}
}