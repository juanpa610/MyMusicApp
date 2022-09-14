import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : String){
   this.spotifyService.getTrasck(termino)
   .subscribe((data : any) =>{
    this.artistas= data;
   });
  }

}
