import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  iconClasss: string = 'bi bi-heart';
  isTrackFavorite : boolean = false;

  @Input() items: any[] = [];
  @Input() itemsSearch: any[] = [];
  isSearchPath: boolean = true;

  arrayPlaylist: any[]=[];	
  arrayFavorits: any[]=[];	
  
  constructor(private location: Location, private spotify: SpotifyService) {}

  private getData() {
    this.spotify.getPlaylist()
      .subscribe((data: any) => {
        this.arrayPlaylist=data.tracks.items;
        this.spotify.getFavorits()
        .subscribe((data2: any) => {
          this.arrayFavorits=data2.items;
          this.midifiClassIcon();
        }
        );
      }
      );
  }

ngOnInit(): void {

  this.getData();

  if(this.location.path() === '/search'){
    this.isSearchPath = this.isSearchPath
  }else{
    this.isSearchPath = !this.isSearchPath
  }
  
}

isFavorite  = (arrayFavorito: any, id: string): boolean =>{
  return !!arrayFavorito.find( (item: any) => item.track.id === id)
}

modificarFav(id: any){

  if(this.isFavorite(this.arrayFavorits,id)) {
    document.getElementById(id)?.classList.add('bi-heart');
    document.getElementById(id)?.classList.remove('bi-heart-fill');
    this.spotify.deleteFavoritos(id).subscribe(() => {});
    this.spotify.getFavorits()
    .subscribe((data2: any) => {
      this.arrayFavorits = data2.items ;
    }
    );
  }else{
    document.getElementById(id)?.classList.remove('bi-heart');
    document.getElementById(id)?.classList.add('bi-heart-fill');
    this.spotify.putFavoritos(id).subscribe(() => {});
    this.spotify.getFavorits()
    .subscribe((data2: any) => {
      this.arrayFavorits = data2.items ;
    }
    );
  }

  

}

midifiClassIcon(){
   this.arrayPlaylist.forEach( (item: any) => {
    if(this.isFavorite(this.arrayFavorits,item.track.id)) {
      console.log(item.track.name, 'es fav');
      document.getElementById(item.track.id)?.classList.remove('bi-heart');
      document.getElementById(item.track.id)?.classList.add('bi-heart-fill');
 
    }
  });
}

}
