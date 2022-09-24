import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './components/templates/favoritos/favoritos.component';
import { HomeComponent } from './components/templates/home/home.component';
import { LoginComponent } from './components/templates/login/login.component';
import { SearchComponent } from './components/templates/search/search.component';
import { AuthSpotifyGuard } from './guard/auth-spotify.guard';

const routes: Routes = [
  
  {path: ''     , redirectTo: 'login', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent, canActivate: [AuthSpotifyGuard]},
  {path: 'search' , component: SearchComponent , canActivate: [AuthSpotifyGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'favoritos', component: FavoritosComponent, canActivate: [AuthSpotifyGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
