import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Subscription } from 'rxjs';
import { addFavorite, cargarFavorites, deleteFavorite } from '../../../store/actions/favotites.actions';
import { selectTracksFavorites } from '../../../store/selectors/favorites.selectors';
import { selectTracksPlaylist } from '../../../store/selectors/playlist.selector';
import { Track } from '../../../interfaces/track.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy  {

  @Input() items: any;
  @Input() className:string = '';
  @Input() classNameSearch:string = '';
  @Input() itemsSearch: ReadonlyArray<any> = [];
  isSearchPath: boolean = true;

  subcriptionPlaylist!: Subscription; 
  subcriptionFavorite!: Subscription; 

  arrayPlaylist: any = [];
  arrayFavorits: ReadonlyArray<Track> = [];	

  cargando: boolean = false;
  error: any;
  
  constructor(private location: Location,
              private store: Store<AppState>) {}
  
  ngOnInit(): void {

    this.subcriptionPlaylist= this.store.select(selectTracksPlaylist).subscribe( (playlist) => {
      this.arrayPlaylist = playlist;
      this.store.dispatch(cargarFavorites());
    });

    this.subcriptionFavorite= this.store.select(selectTracksFavorites).subscribe( (tracksFav) => {
      this.arrayFavorits = tracksFav;
      if(this.arrayPlaylist && this.arrayFavorits){
        this.modifiClassIcon();
      }
    });
    
    if(this.location.path() === '/search'){
      this.isSearchPath = this.isSearchPath
    }else{
      this.isSearchPath = !this.isSearchPath
    }
  }
  
  ngOnDestroy(): void {
    this.subcriptionPlaylist.unsubscribe();
    this.subcriptionFavorite.unsubscribe();
  }

  isFavorite  = (arrayFavorito: any, id: string): boolean =>{
    return !!arrayFavorito.find( (item: any) => item.id === id)
  }

  modifiClassIcon(){
    this.arrayPlaylist.forEach( (item: Track) => {
      if(this.isFavorite(this.arrayFavorits,item.id)) {
        // console.log('id es fav');
        document.getElementById(item.id)?.classList.replace('bi-heart', 'bi-heart-fill');
      }
    });
  }
  
  modificarFav(track: Track){
    if(this.isFavorite(this.arrayFavorits,track.id)  ) {
      document.getElementById(track.id)?.classList.replace('bi-heart-fill', 'bi-heart');
      this.store.dispatch( deleteFavorite({id: track.id} ));

      Swal.fire({
        toast: true,
        position: 'bottom',
        icon: 'error',
        title: 'Eliminada de favoritos',
        showConfirmButton: false,
        timer: 1500,
        color: 'black',
        background:'rgb(12, 192, 232)'
      })
      
    }else{
      document.getElementById(track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
      this.store.dispatch( addFavorite({track}));
      
      Swal.fire({
        toast: true,
        position: 'bottom',
        icon: 'success',
        title: 'Agregada favoritos',
        showConfirmButton: false,
        timer: 1500,
        color: 'black',
        background:'rgb(12, 192, 232)'
      })
 
    }
  }

}
