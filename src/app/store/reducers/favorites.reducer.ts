import { createReducer, on } from '@ngrx/store';
import { FavoritesState } from '../../interfaces/favorites.state';
import * as actions from '../actions/favotites.actions';

//Estado inicial!!!
export const favoritesinitialState: FavoritesState = {
  tracksFav: [],
  cargando: false,
  error: null
};
// El reducer va a ser la funcion que va a escuchar la accion, 
// agarrar el estado actual y agregar la informacion que viene para generar un nuevo estado 
export const favoritesReducer = createReducer(
  favoritesinitialState, //los 3 "..." puntos son para generar un nuevo estado --> no para modificar
    // on lo que hace es que escucha la accion que se esta ejecutando o disparando 
    on(actions.cargarFavorites, state => ({...state,  cargando: true})),
  
    on(actions.cargarFavoritesSuccess, (state,{tracksFav}) => {
      return {...state,
      cargando: false, 
      tracksFav: tracksFav
    }
    }),

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
      return {...state, id};
    }),

    on(actions.deleteFavoriteSuccess, (state,{id}) => {
      let newState = {...state}
      newState.tracksFav = newState.tracksFav.filter(f => f.id !== id); 
      return newState;
    }),

    on(actions.addFavorite, (state,{track}) => {
    return {...state, track }
    }),
  
    on(actions.addFavoriteSuccess, (state,{track}) => {
      let newState = {...state};
      newState.tracksFav = [track, ...newState.tracksFav];
      return newState;
    }),
  );