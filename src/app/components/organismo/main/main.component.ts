import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { cargarPlaylist } from 'src/app/store/actions/playlist.actions';
import { cargarUserData } from 'src/app/store/actions/user.actions';
import * as store from 'src/app/store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAutemtifing: boolean = false;

  display_name : string = '';
  img_user: string = '';

  nuevasCanciones: ReadonlyArray<any> = [];
  cargando: boolean = false;
  error: any;
  titlePag : string =''

  constructor(private playlistStore: Store<store.PlaylistState>,
              private userDataStore: Store<store.UserDataState>,
              private favoritesDataStore: Store<store.FavoritesState>
  ) {}

  ngOnInit(): void {
    this.playlistStore.select('playlist').subscribe( ({ playlist, name, cargando, error }) => {
      this.nuevasCanciones = playlist;
      this.titlePag = name;
      this.cargando = cargando;
      this.error    = error;
    })
    this.userDataStore.select('userData').subscribe( ({ display_name, images }) => {
     this.img_user = images;
    })

    this.playlistStore.dispatch( cargarPlaylist());
    this.userDataStore.dispatch( cargarUserData());
    this.favoritesDataStore.dispatch( cargarFavorites());
  }

  logout(){
    this.isAutemtifing = true;
    // this.tokrn.removeToken(this.isAutemtifing );
  }
}
