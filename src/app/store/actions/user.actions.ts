import { createAction, props } from '@ngrx/store';

export const cargarUserData = createAction('[UserData] Cargar UserData');

export const cargarUserDataSuccess = createAction(
    '[UserData] Cargar UserData Success',
    props<{userData: any}>()
);

export const cargarUserDataError = createAction(
    '[UserData] Cargar UserData Error',
    props<{payload: any}>()
);