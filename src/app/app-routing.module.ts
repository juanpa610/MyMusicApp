import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './components/templates/favoritos/favoritos.component';
import { HomeComponent } from './components/templates/home/home.component';
import { LoginComponent } from './components/templates/login/login.component';
import { SearchComponent } from './components/templates/search/search.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  
  {path: 'home' , component: HomeComponent, canActivate: [LogoutGuard]},
  {path: 'login', component: LoginComponent , canActivate: [LoginGuard]},
  {path: 'search' , component: SearchComponent , canActivate: [LogoutGuard]},
  {path: 'favoritos', component: FavoritosComponent, canActivate: [LogoutGuard]},
  {path: ''     , redirectTo: 'login', pathMatch: 'full', },
  {path: '**'     , redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
