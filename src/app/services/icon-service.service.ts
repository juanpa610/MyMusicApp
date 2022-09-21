import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconServiceService {

  iconActiveName: string = '';

  constructor() { }

  iconActive(name: string){
    if(name === 'home'){
      this.iconActiveName = 'homeredirect';
    } else if(name === 'search'){
      this.iconActiveName = 'searchredirect';
    }else if(name === 'favoritos'){
      this.iconActiveName = 'favoritosredirect';
    }
  }

}
