import { ActionReducerMap} from '@ngrx/store';
import { Favorites } from '../interfaces/favorites.interface';
import { Playlist } from '../interfaces/playlist.interface';
import { DataUser } from '../interfaces/userData.interface';
import * as reducers from './reducers';

export interface AppState{
    playlist: Playlist;
    favorites: Favorites;
    userData: DataUser;
}

export const appReducers: ActionReducerMap<AppState> = {
    playlist: reducers.playlistReducer,
    favorites: reducers.favoritesReducer,
    userData: reducers.userDataReducer
}