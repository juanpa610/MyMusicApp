import { Track } from "./track.interface";

export interface PlaylistState {
    playlist: ReadonlyArray<Track>,
    name: string;
    cargando: boolean,
    error : any
}

