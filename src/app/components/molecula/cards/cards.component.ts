import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  nuevasCanciones: any[] = [];
  
  constructor(private _spotifyService : SpotifyService) {
    this._spotifyService.getNewReleases()
    .subscribe( (data : any) =>{
      console.log(data);
      this.nuevasCanciones = data;
    });
   }

  ngOnInit(): void {
  }

}
