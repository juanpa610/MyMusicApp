export interface Playlist {
    // playlist: ReadonlyArray<any>,
    playlist: [],
    name: string;
    cargando: boolean,
    error : any
}

export interface Track {
    name: string;
    artists: [],
    images : string,
    cargando: boolean,
    error : any
}

