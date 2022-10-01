export interface Favorites {
    // favorites: ReadonlyArray<any>,
    tracksFav: Track[],
    cargando: boolean,
    error : any,
    id : string
}

export interface Track {
    track: any
    album: Album[]
    artists: Artist[]
    id: string
    name: string
}
export interface Album {
    artists: Artists[]
    images: Image[]
    name: string
}
export interface Artists {
    name: string
}
export interface Image {
    height: number
    url: string
    width: number
}
export interface Artist {
    name: string
}
  
