export interface Track {
    track: any
    album: Album[]
    artists: Artist[]
    id: string
    name: string
}
interface Album {
    artists: Artists[]
    images: Image[]
    name: string
}
interface Artists {
    name: string
}
interface Image {
    height: number
    url: string
    width: number
}
interface Artist {
    name: string
}
  
