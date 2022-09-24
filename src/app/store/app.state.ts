import { ActionReducerMap} from '@ngrx/store';
import { Favorites } from '../interfaces/favorites.interface';
import { Playlist } from '../interfaces/playlist.interface';
import { DataUser } from '../interfaces/userData.interface';
import { favoritesReducer } from './reducers/favorites.reducer';
import * as reducers from './reducers/playlist.reducer';
import { userDataReducer } from './reducers/user.reducer';

export interface PlaylistState{
    playlist: Playlist
}
export interface FavoritesState{
    favorites: Favorites
}
export interface UserDataState{
    userData: DataUser
}

export const appReduccers: ActionReducerMap<PlaylistState> = {
    playlist: reducers.playlistReducer
}
export const favoritesReduccers: ActionReducerMap<FavoritesState> = {
    favorites: favoritesReducer
}
export const UserDataReduccers: ActionReducerMap<UserDataState> = {
    userData: userDataReducer
}