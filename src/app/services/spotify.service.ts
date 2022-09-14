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
 
  getNewReleases(){

    const headers = new HttpHeaders(
      { 
      'Authorization' : 'Bearer '+this.token.getToken()
      }
    );

    return this.http.get('https://api.spotify.com/v1/browse/new-releases/', {headers})
    .pipe( map( (data: any) =>{
      return data.albums.items;
    }));
    
  }

  getTrasck(termino : String){
    const headers = new HttpHeaders(
      { 
      'Authorization' : 'Bearer '+this.token.getToken()
      }
    );

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=track&market=Co`, {headers})
    .pipe(map((data : any) =>{
      return  data.tracks.items
    }));
  }

  getUser(){
    const headers = new HttpHeaders(
      { 
      'Authorization' : 'Bearer '+this.token.getToken()
      }
    );
    return this.http.get('	https://api.spotify.com/v1/me' , {headers});
  }

 
 
}
