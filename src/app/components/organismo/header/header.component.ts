import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datosUser : any[] = [];

  constructor(private spotifyService: SpotifyService ) { 
    this.user();
  }

  ngOnInit(): void {
    
  }

  user(){
    this.spotifyService.getUser()
    .subscribe( (data : any) =>{
      // console.log(data);
      this.datosUser = data;
    });
  }

  
}
