import { createSelector } from '@ngrx/store';
import { PlaylistState } from 'src/app/interfaces/playlist.state';
import { AppState } from '../app.state';
 
export const selectPlaylist = (state: AppState) => state.playlist;
 
export const selectTracksPlaylist= createSelector(
    selectPlaylist,
    (state: PlaylistState ) => state.playlist
);

export const selectCargando= createSelector(
    selectPlaylist,
    (state: PlaylistState) => state.cargando
);