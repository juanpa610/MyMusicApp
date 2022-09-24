import { createAction, props } from '@ngrx/store';

export const cargarFavorites = createAction('[Playlist] Cargar Favorites');

export const cargarFavoritesSuccess = createAction(
    '[Playlist] Cargar Favorites Success',
    props<{favorites: any}>()
);

export const cargarFavoritesError = createAction(
    '[Playlist] Cargar Favorites Error',
    props<{payload: any}>()
);