import { createSelector } from '@ngrx/store';
import { DataUserState } from '../../interfaces/userData.state';
import { AppState } from '../app.state';
 
export const selectUserData = (state: AppState) => state.userData;
 
export const selectLoginUserData= createSelector(
    selectUserData,
    (state: DataUserState ) => state.log
);

export const selectImgUserData= createSelector( 
    selectUserData, 
    (state: DataUserState) => state.images 
);
