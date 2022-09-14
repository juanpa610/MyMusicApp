import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { LoginComponent } from './components/templates/login/login.component';
import { SearchComponent } from './components/templates/search/search.component';

const routes: Routes = [
  
  {path: ''     , redirectTo: 'login', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'search' , component: SearchComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
