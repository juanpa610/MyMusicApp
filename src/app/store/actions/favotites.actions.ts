import { createAction, props } from '@ngrx/store';
import { Track } from 'src/app/interfaces/track.interface';

export const cargarFavorites = createAction(
    '[Favorites] Cargar Favorites'
);

export const cargarFavoritesSuccess = createAction(
    '[Favorites] Cargar Favorites Success',
    // ReadonlyArray : array de lectura y cada valor del array va ser de tipo Track
    props<{tracks: ReadonlyArray<Track> }>() 
);
export const cargarFavoritesError = createAction(
    '[Favorites] Cargar Favorites Error',
    props<{payload: any}>()
);
export const deleteFavorite = createAction(
    '[Favorites] Delete Favorite',
    props<{ id: string; }>()
);

export const deleteFavoriteSuccess = createAction(
    '[Favorites] Delete Favorite Success ',
    props<{ id: string; }>()
);

export const addFavorite = createAction(
    '[Favorites] Add Favorite',
    props<{ track: Track }>()
);

export const addFavoriteSuccess = createAction(
    '[Favorites] Add Favorite Success ',
    props<{ track: any; }>()
);