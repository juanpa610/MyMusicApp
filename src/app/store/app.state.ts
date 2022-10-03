import { ActionReducerMap} from '@ngrx/store';
import { FavoritesState } from '../interfaces/favorites.state';
import { PlaylistState } from '../interfaces/playlist.state';
import { DataUserState } from '../interfaces/userData.state';
import * as reducers from './reducers';

export interface AppState{
    playlist : PlaylistState;
    favorites: FavoritesState;
    userData : DataUserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    playlist: reducers.playlistReducer,
    favorites: reducers.favoritesReducer,
    userData: reducers.userDataReducer
}