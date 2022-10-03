import { Track } from "./track.interface";

export interface FavoritesState {
    tracksFav: ReadonlyArray<Track>,
    cargando: boolean,
    error : any,
    id : string
}