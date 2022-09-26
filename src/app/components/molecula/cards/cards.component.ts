import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as store from 'src/app/store/app.state';
import { SpotifyService } from 'src/app/services/spotify.service';
import { cargarPlaylist } from 'src/app/store/actions/playlist.actions';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() items: ReadonlyArray<any> = [];
  @Input() itemsSearch: ReadonlyArray<any> = [];
  isSearchPath: boolean = true;

  arrayPlaylist: ReadonlyArray<any> = [];
  arrayFavorits: ReadonlyArray<any> = [];	

  cargando: boolean = false;
  error: any;
  
  constructor(private location: Location,
              private playlistStore: Store<store.PlaylistState>,
              private favoritesStore: Store<store.FavoritesState>,
              private spotify: SpotifyService
  ) {}
  
  ngOnInit(): void {
    
    // this.getData();

    this.playlistStore.select('playlist').subscribe( ({ playlist }) => {
      this.arrayPlaylist = playlist;
    })
    this.favoritesStore.select('favorites').subscribe( ({  favorites }) => {
      this.arrayFavorits = favorites;
    })
    
    if(this.location.path() === '/search'){
      this.isSearchPath = this.isSearchPath
    }else{
      this.isSearchPath = !this.isSearchPath
    }
    
    this.midifiClassIcon();
  }

  isFavorite  = (arrayFavorito: any, id: string): boolean =>{
    
    return !!arrayFavorito.find( (item: any) => item.track.id === id)
  }

  modificarFav(id: any){
    if(this.isFavorite(this.arrayFavorits,id)) {
      document.getElementById(id)?.classList.replace('bi-heart-fill', 'bi-heart');
      this.spotify.deleteFavoritos(id).subscribe(() => {});
  }
  else{
    document.getElementById(id)?.classList.replace('bi-heart', 'bi-heart-fill');
    this.spotify.putFavoritos(id).subscribe(() => {});
  }
  }

  midifiClassIcon(){
    
    console.log(this.arrayPlaylist);
    console.log(this.arrayFavorits);
    this.arrayPlaylist.forEach( (item: any) => {
      if(this.isFavorite(this.arrayFavorits,item.track.id)) {
        console.log(item.track.name, 'es fav');
        console.log(item.track.id);
        document.getElementById(item.track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
        // document.getElementById(item.track.id)?.classList.add('bi-heart');
      }
    });
  }

}
