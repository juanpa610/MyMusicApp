import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private token : TokenService) { 
   
  }

  getQuery(query : String) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization' : 'Bearer '+this.token.getToken()
    });

    return this.http.get(url, { headers})
  }

  putQuery(query : String) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization' : 'Bearer '+this.token.getToken()
    });

    return this.http.put(url,null, {headers})
    
  }

  deleteQuery(query : String) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization' : 'Bearer '+this.token.getToken()
    });

    return this.http.delete(url, {headers})
    
  }

  

  //Eliminar canciones de favoritos
  deleteFavoritos(id : String){
    return this.deleteQuery(`me/tracks?ids=${id}`)
  }

  //Agregar canciones a favoritos
  putFavoritos(id : String) {
    return this.putQuery(`me/tracks?ids=${id}`)
  }
  
  //Datos sobre la playlist de Los 2000
  getPlaylist(){
    return this.getQuery(`playlists/37i9dQZF1DX54UIszz9BMX`)
    .pipe( map( (data: any) =>
      data
    ));
  }

  getFavoristosDeLaPlaylist(ids: string[]){
    const idss = ids.toString();
    console.log(idss);

    return this.getQuery(`me/tracks/contains?ids=${ids}`)
    .subscribe( data  =>{ console.log(data)});
  }
  
  //Datos sobre mis favoritos
  getFavorits(){
   
    return this.getQuery(`me/tracks`)
    .pipe(map((data : any) =>
      data.items.map((item : any) => item.track)
    ));
  }

  //Datos sobre busqueda de canciones
  getTrasck(termino : String){
    return this.getQuery(`search?q=${termino}&type=track&market=CO`)
    .pipe(map((data : any) =>
      data.tracks.items 
    ));
  }

  //Datos del mi cuenta 
  getUser(){
    return this.getQuery('me')
    .pipe(map((data : any) => 
      data 
    ));
  }


 
}
