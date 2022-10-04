import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { cargarPlaylist } from 'src/app/store/actions/playlist.actions';
import { cargarUserData } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCargando, selectNamePlaylist, selectTracksPlaylist } from 'src/app/store/selectors/playlist.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  img_user: string = '';

  nuevasCanciones: any = [];
  
  cargando$: Observable<any> = new Observable();
  titlePag$: Observable<any> = new Observable();

  subcriptionPlaylist!: Subscription;  
  
  constructor(private store: Store<AppState>,
              private token: TokenService
  ) {
    
  }

  ngOnInit(): void {

    this.subcriptionPlaylist = this.store.select(selectTracksPlaylist).subscribe( 
      playlist => this.nuevasCanciones= playlist);

    this.cargando$ = this.store.select(selectCargando)
    this.titlePag$ = this.store.select(selectNamePlaylist)
    
    this.store.select('userData').subscribe( ({ images }) => {
     this.img_user = images;
    })

    this.store.dispatch( cargarUserData());
    this.store.dispatch( cargarPlaylist());
  }

  ngOnDestroy(): void {
    this.subcriptionPlaylist.unsubscribe();
  }

  logout(){
    this.token.removeToken();
    window.location.href = "/login";
  }

  
}
