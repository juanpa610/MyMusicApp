import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { PlaylistState } from 'src/app/store/app.state';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  iconClasss: string = 'bi bi-heart';
  isTrackFavorite : boolean = false;

  @Input() items: ReadonlyArray<any> = [];
  @Input() itemsSearch: ReadonlyArray<any> = [];
  isSearchPath: boolean = true;

  arrayPlaylist: any[]=[];	
  arrayFavorits: any[]=[];	

  cargando: boolean = false;
  error: any;
  
  
  constructor(private location: Location,
              private playlistStore: Store<store.PlaylistState>,
              private userDataStore: Store<store.UserDataState>) {}

  ngOnInit(): void {

    this.playlistStore.select('playlist').subscribe( ({ playlist, name, cargando, error }) => {
      this.nuevasCanciones = playlist;
      this.titlePag = name;
      this.cargando = cargando;
      this.error    = error;
    })

    if(this.location.path() === '/search'){
      this.isSearchPath = this.isSearchPath
    }else{
      this.isSearchPath = !this.isSearchPath
    }
    
  }

  // private getData() {
  //   this.spotify.getPlaylist()
  //     .subscribe((data: any) => {
  //       this.arrayPlaylist=data.tracks.items;
  //       this.spotify.getFavorits()
  //       .subscribe((data2: any) => {
  //         this.arrayFavorits=data2.items;
  //         this.midifiClassIcon();
  //       }
  //       );
  //     }
  //     );
  // }

  // ngOnInit(): void {

  //   this.getData();

   
  // }

  // isFavorite  = (arrayFavorito: any, id: string): boolean =>{
  //   return !!arrayFavorito.find( (item: any) => item.track.id === id)
  // }

  // modificarFav(id: any){

  //   if(this.isFavorite(this.arrayFavorits,id)) {
  //     document.getElementById(id)?.classList.add('bi-heart');
  //     document.getElementById(id)?.classList.remove('bi-heart-fill');
  //     this.spotify.deleteFavoritos(id).subscribe(() => {
  //       this.spotify.getFavorits()
  //       .subscribe((data2: any) => {
  //       this.arrayFavorits = data2.items ;
  //     });
  //     });
  //     //   this.spotify.getFavorits()
  //     //   .subscribe((data2: any) => {
  //     //   this.arrayFavorits = data2.items ;
  //     // });
  //   }else{
  //     document.getElementById(id)?.classList.remove('bi-heart');
  //     document.getElementById(id)?.classList.add('bi-heart-fill');
  //     this.spotify.putFavoritos(id).subscribe(() => {});
  //     this.spotify.getFavorits()
  //     .subscribe((data2: any) => {
  //       this.arrayFavorits = data2.items ;
  //     }
  //     );
  //   }

    

  // }

  // midifiClassIcon(){
  //   this.arrayPlaylist.forEach( (item: any) => {
  //     if(this.isFavorite(this.arrayFavorits,item.track.id)) {
  //       // console.log(item.track.name, 'es fav');
  //       document.getElementById(item.track.id)?.classList.remove('bi-heart');
  //       document.getElementById(item.track.id)?.classList.add('bi-heart-fill');
  
  //     }
  //   });
  // }

}
