import { createSelector } from '@ngrx/store';
import { Playlist } from 'src/app/interfaces/playlist.interface';
import { AppState } from '../app.state';
 
export const selectPlaylist = (state: AppState) => state.playlist;
 
export const selectCargando= createSelector(
    selectPlaylist,
    (state: Playlist ) => state.cargando
);

export const selectTracksPlaylist= createSelector(
    selectPlaylist,
    (state: Playlist ) => state.playlist
);