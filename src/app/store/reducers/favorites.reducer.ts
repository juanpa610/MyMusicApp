import { createReducer, on } from '@ngrx/store';
import { Favorites } from 'src/app/interfaces/favorites.interface';
import * as actions from '../actions/favotites.actions';

export const favoritesinitialState: Favorites = {
  tracksFav: [],
  cargando: false,
  error: null,
  id: ''
};

export const favoritesReducer = createReducer(
  favoritesinitialState,
    on(actions.cargarFavorites, state => ({...state,  cargando: true})),
  
    on(actions.cargarFavoritesSuccess, (state,{tracks}) => ({
      ...state,
      cargando: false, 
      tracksFav: tracks
    })),

    on(actions.cargarFavoritesError, (state,{ payload}) => ({
      ...state,
      cargando: false, 
      error:{
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    
    })),
  
    
    on(actions.deleteFavorite, (state,{id}) => {
      // console.log(id);
      return {...state, id};
    }),

    on(actions.deleteFavoriteSuccess, (state,{id}) => {
      let newState = {...state}
      newState.tracksFav = newState.tracksFav.filter(f => f.track.id !== id); 
      return newState;
    }),

    on(actions.addFavorite, (state,{track}) => ({
       ...state,
      track
    })),
  
    on(actions.addFavoriteSuccess, (state,{track}) => {
      let newState = {...state};
      newState.tracksFav = [track, ...newState.tracksFav];
      return newState;
    }),
  );