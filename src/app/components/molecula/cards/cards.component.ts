import { Component, OnInit, Input, OnDestroy, AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Subscription } from 'rxjs';
import { addFavorite, deleteFavorite } from 'src/app/store/actions/favotites.actions';
import { Track } from 'src/app/interfaces/favorites.interface';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy, AfterViewInit  {

  @Input() items: ReadonlyArray<any> = [];
  @Input() className:string = '';
  @Input() classNameSearch:string = '';
  @Input() itemsSearch: ReadonlyArray<any> = [];
  isSearchPath: boolean = true;

  subcriptionPlaylist!: Subscription; 
  subcriptionFavorite!: Subscription; 

  arrayPlaylist: ReadonlyArray<any> = [];
  arrayFavorits: ReadonlyArray<any> = [];	

  cargando: boolean = false;
  error: any;
  
  constructor(private location: Location,
              private store: Store<AppState>) {}

  ngAfterViewInit(): void {

    this.subcriptionPlaylist= this.store.select('playlist').subscribe( ({ playlist }) => {
      this.arrayPlaylist = playlist;
      this.subcriptionFavorite= this.store.select('favorites').subscribe( ({  tracksFav }) => {
        this.arrayFavorits = tracksFav;
        if(this.arrayPlaylist && this.arrayFavorits){
          this.modifiClassIcon();
        }
      })
    })
  }

  ngOnInit(): void {
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
    return !!arrayFavorito.find( (item: any) => item.track.id === id) || !!arrayFavorito.find( (item: any) => item.id === id)
  }

  modifiClassIcon(){
    this.arrayPlaylist.forEach( (item: any) => {
      if(this.isFavorite(this.arrayFavorits,item.track.id)) {
        // console.log('id es fav');
        document.getElementById(item.track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
      }
    });
  }
  
  modificarFav(track: Track){
    if(this.isFavorite(this.arrayFavorits,track.id)  ) {
      this.store.dispatch( deleteFavorite({id: track.id} ));
      this.subcriptionFavorite= this.store.select('favorites').subscribe( ({  tracksFav }) => {
        document.getElementById(track.id)?.classList.replace('bi-heart-fill', 'bi-heart');
        this.arrayFavorits = tracksFav;
      })
    }else{
      this.store.dispatch( addFavorite({track}));
      this.subcriptionFavorite= this.store.select('favorites').subscribe( ({  tracksFav }) => {
        document.getElementById(track.id)?.classList.replace('bi-heart', 'bi-heart-fill');
        this.arrayFavorits = tracksFav;
      })
    }
  }
}
