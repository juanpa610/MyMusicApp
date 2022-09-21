import { Location } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(private location: Location, private spotifyService: SpotifyService) { 
  }

  ngOnInit(): void {
  }

}
