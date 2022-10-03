import { Track } from "./track.interface";

export interface PlaylistState {
    playlist: Track[],
    name: string;
    cargando: boolean,
    error : any
}

