export interface Playlist {
    playlist: ReadonlyArray<any>,
    name: string;
    cargando: boolean,
    error : any
}

export interface Tracks {
    name: string;
    cargando: boolean,
    error : any
}

