import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  display_name : string = '';
  img_user: Array<string> = [];

  nuevasCanciones: any[] = [];
  titlePag : string =''
  cargando: boolean;

  constructor(private spotifyService : SpotifyService) { 

    this.cargando = true;

    this.spotifyService.getPlaylist()
      .subscribe( (data : any) =>{
        this.cargando = false;
        this.titlePag = data.name;
        this.nuevasCanciones = data.tracks.items;
      }
    );

  

    // console.log(this.nuevasCanciones);

    // this.asignarIdsArray();

  }

  ngOnInit(): void {
    this.user();
  }

  user(){
    this.spotifyService.getUser()
    .subscribe( (data : any) =>{
      this.display_name = data.display_name;
      this.img_user= data.images[0].url;
    });
  }

  // asignarIdsArray(){
  //   this._spotifyService.getPlaylist()
  //   .subscribe( (data : any) =>{
      
  //     data.forEach((element : any) => {
  //       this.arrayIds.push(element.track.id)
  //     });
  //     console.log(this.arrayIds.length);
  //     console.log(this.arrayIds);
      
  //     this._spotifyService.getFavoristosDeLaPlaylist(this.arrayIds);

  //     //aqui le estoy mandando los id a getFavoristPlay para que 
  //     // me los convierta en una cadena de texto 
      
  //   })
  // }
  

}
