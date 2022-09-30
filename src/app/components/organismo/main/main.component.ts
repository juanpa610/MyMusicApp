import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TokenService } from 'src/app/services/token.service';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { cargarPlaylist } from 'src/app/store/actions/playlist.actions';
import { cargarUserData } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  display_name : string = '';
  img_user: string = '';

  nuevasCanciones: ReadonlyArray<any> = [];
  cargando: boolean = false;
  error: any;
  titlePag : string =''

  constructor(private store: Store<AppState>,
              private token: TokenService
  ) {}

  ngOnInit(): void {
    this.store.select('playlist').subscribe( ({ playlist, name, cargando, error }) => {
      this.nuevasCanciones = playlist;
      this.titlePag = name;
      this.cargando = cargando;
      this.error    = error;
    })
    this.store.select('userData').subscribe( ({ display_name, images }) => {
     this.img_user = images;
    })

    this.store.dispatch( cargarPlaylist());
    this.store.dispatch( cargarUserData());
    this.store.dispatch( cargarFavorites());
  }

  logout(){
    // this.store.dispatch( logout());
    this.token.removeToken();
    window.location.href = "/login";
  }

  
}
