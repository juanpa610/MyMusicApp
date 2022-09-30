import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Subscription } from 'rxjs';
import { addFavorite, deleteFavorite } from 'src/app/store/actions/favotites.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {

  @Input() items: ReadonlyArray<any> = [];
  @Input() className:string = '';
  @Input() classNamese:string = '';
  @Input() itemsSearch: ReadonlyArray<any> = [];
  isSearchPath: boolean = true;

  subcriptionPlaylist!: Subscription; 
  subcriptionFavorite!: Subscription; 

  arrayPlaylist: ReadonlyArray<any> = [];
  arrayFavorits: ReadonlyArray<any> = [];	

  cargando: boolean = false;
  error: any;
  
  constructor(private location: Location,
              private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    
    // this.getData();
    
    this.subcriptionPlaylist= this.store.select('playlist').subscribe( ({ playlist }) => {
      this.arrayPlaylist = playlist;
    })
    
    this.subcriptionFavorite= this.store.select('favorites').subscribe( ({  favorites }) => {
      this.arrayFavorits = favorites;
      this.modifiClassIcon();
    })
    
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
    return !!arrayFavorito.find( (item: any) => item.track.id === id)
  }

  modifiClassIcon(){
    this.arrayPlaylist.forEach( (item: any) => {

      if(this.isFavorite(this.arrayFavorits,item.track.id)) {
        console.log('id es fav');
        document.getElementById(item.track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
      }

    });
  }
  
  modificarFav(track: any){
   
    if(this.isFavorite(this.arrayFavorits,track.id)) {
      document.getElementById(track.id)?.classList.replace('bi-heart-fill', 'bi-heart');
      this.store.dispatch( deleteFavorite({id: track.id} ));
    }else{
      document.getElementById(track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
      this.store.dispatch( addFavorite({track}));
    }
  }

}
