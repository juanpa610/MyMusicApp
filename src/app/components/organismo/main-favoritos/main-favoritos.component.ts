import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarFavorites } from 'src/app/store/actions/favotites.actions';
import { FavoritesState } from 'src/app/store/app.state';

@Component({
  selector: 'app-main-favoritos',
  templateUrl: './main-favoritos.component.html',
  styleUrls: ['./main-favoritos.component.scss']
})
export class MainFavoritosComponent implements OnInit {

  misFavoritos: ReadonlyArray<any> = [];
  cargando: boolean = false;
  error: any;

  cargando$: Observable<boolean> = new Observable();


  constructor(private store: Store<FavoritesState>) {

    // this.servicesSpotift.getFavorits()
    // .subscribe( (data : any) =>{
    //   // console.log('datad',data);
    //   this.misFavoritos= data.items;
    // });
   }

  ngOnInit(): void {

    
    // this.cargando$= this.store.select(selectCargando);

    
    this.store.select('favorites').subscribe( ({ favorites, cargando, error }) => {
      this.misFavoritos = favorites;
      this.cargando = cargando;
      this.error    = error;
        
    })
   
    this.store.dispatch( cargarFavorites());
  }


}
