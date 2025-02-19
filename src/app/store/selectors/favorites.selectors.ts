import { createSelector } from '@ngrx/store';
import { FavoritesState } from '../../interfaces/favorites.state';
import { AppState } from '../app.state';
 
export const selectFavorites = (state: AppState) => state.favorites; // <-- selector PADRE
 
export const selectCargandoFav= createSelector(
    selectFavorites,
    (state: FavoritesState) => state.cargando // <-- selector HIJO
);

export const selectTracksFavorites= createSelector(
    selectFavorites,
    (state: FavoritesState ) => state.tracksFav // <-- selector HIJO 
);