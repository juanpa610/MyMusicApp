import { createAction, props } from '@ngrx/store';

export const cargarPlaylist = createAction('[Playlist] Cargar Playlist');

export const cargarPlaylistSuccess = createAction(
    '[Playlist] Cargar Playlist Success',
    props<{playlist: any}>()
);

export const cargarPlaylistError = createAction(
    '[Playlist] Cargar Playlist Er',
    props<{payload: any}>()
);