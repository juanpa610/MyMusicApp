import { createReducer, on } from '@ngrx/store';
import { DataUser } from 'src/app/interfaces/userData.interface';
import * as actions from '../actions/user.actions';

export const userDataInitialState: DataUser = {
  display_name: '',
  id: '',
  images: '',
  log : false
};

export const userDataReducer = createReducer(
  userDataInitialState,
  on( actions.cargarUserData, state => ({...state,  cargando: true})),
  
  on(actions.cargarUserDataSuccess, (state,{userData}) => ({
    
    display_name: userData.display_name,
    id: userData.id,
    images: userData.images[0].url,
    cargando: false, 
    log: true
  })),
  
  on( actions.logout, state => ({...state, log: false})),
  on( actions.login, state => ({...state, log: true})),

  on(actions.cargarUserDataError, (state,{ payload}) => ({
    ...state,
    cargando: false, 
    
    error:{
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  
  })),

);