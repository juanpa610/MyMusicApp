import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {
  
  artistas: any[] = [];

  subcriptionPlaylist!: Subscription; 
  subcriptionFavorite!: Subscription; 

  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : String){
    this.spotifyService.getTrasck(termino)
    .subscribe((data : any) =>{
    console.log( this.artistas = data);
    });
  }

}
