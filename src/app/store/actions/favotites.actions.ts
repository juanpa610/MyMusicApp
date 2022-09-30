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


export const deleteFavorite = createAction(
    '[Playlist] Delete Favorite',
    props<{ id: string; }>()
);

export const deleteFavoriteSuccess = createAction(
    '[Playlist] Delete Favorite Success ',
    props<{ id: string; }>()
);

export const addFavorite = createAction(
    '[Playlist] Add Favorite',
    props<{ track: any; }>()
);

export const addFavoriteSuccess = createAction(
    '[Playlist] Add Favorite Success ',
    props<{ track: any; }>()
);