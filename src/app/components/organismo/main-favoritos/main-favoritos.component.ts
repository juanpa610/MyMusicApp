import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main-favoritos',
  templateUrl: './main-favoritos.component.html',
  styleUrls: ['./main-favoritos.component.scss']
})
export class MainFavoritosComponent implements OnInit {

  misFavoritos: any[]=[];

  constructor(private servicesSpotift: SpotifyService) {
    this.servicesSpotift.getFavorits()
    .subscribe( (data : any) =>{
      // console.log('datad',data);
      this.misFavoritos= data.items;
    });
   }

  ngOnInit(): void {
  }

  

}
