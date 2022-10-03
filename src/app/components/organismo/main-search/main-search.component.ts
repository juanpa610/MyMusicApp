import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit,AfterViewInit {
  
  artistas: any[] = [];

  @ViewChild('termino') emailInputElement!: ElementRef<HTMLInputElement>;
  
  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
    this.buscar('a')
  }

  ngAfterViewInit(): void {
    this.emailInputElement.nativeElement.focus();
  }

  buscar(termino : String){
    if(termino === '' || termino === undefined || termino === null){
      this.spotifyService.getTrasck(termino='arca').subscribe(data => this.artistas = data)
    }else{
      this.spotifyService.getTrasck(termino).subscribe(data => this.artistas = data)
    }
  }

}
