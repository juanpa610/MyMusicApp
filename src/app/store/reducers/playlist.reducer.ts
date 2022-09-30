import { createReducer, on } from '@ngrx/store';
import { Playlist } from 'src/app/interfaces/playlist.interface';
import * as actions from '../actions/playlist.actions';

export const playlistInitialState: Playlist = {
  playlist: [],
  name: '',
  cargando: false,
  error: null
};

export const playlistReducer = createReducer(
  playlistInitialState,
  on(actions.cargarPlaylist, state => ({...state,  cargando: true})),

  on(actions.cargarPlaylistSuccess, (state,{playlist}) => ({
    ...state,
    cargando: false, 
    playlist: playlist.tracks.items,
    name: playlist.name
  })),

  on(actions.cargarPlaylistError, (state,{payload}) => ({
    ...state,
    cargando: false, 
    error:{
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  
  })),

);