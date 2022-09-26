import { createReducer, on } from '@ngrx/store';
import { Favorites } from 'src/app/interfaces/favorites.interface';
import * as actions from '../actions/favotites.actions';

export const favoritesinitialState: Favorites = {
  favorites: [],
  cargando: false,
  error: null
};

export const favoritesReducer = createReducer(
  favoritesinitialState,
    on(actions.cargarFavorites, state => ({...state,  cargando: true})),
  
    on(actions.cargarFavoritesSuccess, (state,{favorites}) => ({
      ...state,
      cargando: false, 
      favorites
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
  
  );