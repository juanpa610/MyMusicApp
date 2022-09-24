import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/templates/login/login.component';
import { HeaderComponent } from './components/organismo/header/header.component';
import { HomeComponent } from './components/templates/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/organismo/main/main.component';
import { SearchComponent } from './components/templates/search/search.component';
import { IconButtonComponent } from './components/atomos/icon-buttons/icon-button.component';
import { NavComponent } from './components/molecula/nav/nav.component';
import { ImgCardsComponent } from './components/atomos/img-cards/img-cards.component';
import { TextCardsComponent } from './components/atomos/text-cards/text-cards.component';
import { FavoritosComponent } from './components/templates/favoritos/favoritos.component';
import { MainFavoritosComponent } from './components/organismo/main-favoritos/main-favoritos.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MainSearchComponent } from './components/organismo/main-search/main-search.component';
import { IconFavComponent } from './components/atomos/icon-fav/icon-fav.component';

import { StoreModule } from '@ngrx/store';
import { PlaylistEffects } from './store/effects/playlist.effects';
import { EffectsModule } from '@ngrx/effects';
import { playlistReducer } from './store/reducers/playlist.reducer';
import { CardsComponent } from './components/molecula/cards/cards.component';
import { favoritesReducer } from './store/reducers/favorites.reducer';
import { FavoritesEffects } from './store/effects/favorites.effects';
import { userDataReducer } from './store/reducers/user.reducer';
import { UserDataEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    SearchComponent,
    IconButtonComponent,
    NavComponent,
    ImgCardsComponent,
    TextCardsComponent,
    FavoritosComponent,
    MainFavoritosComponent,
    MainSearchComponent,
    IconFavComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ playlist: playlistReducer, favorites: favoritesReducer, userData: userDataReducer}),
    EffectsModule.forRoot([PlaylistEffects, FavoritesEffects, UserDataEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
