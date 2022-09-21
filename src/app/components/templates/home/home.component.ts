import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private token : TokenService, private router: Router) {
 
    this.obtenerUrl();
  }

  ngOnInit(): void {
    
  }

  obtenerUrl  () {
    const url_token= window.location.hash.substring(1).split("&");
    const array_token = url_token[0].split("=")
    let token = array_token[1]
    this.token.setToken(token);
    this.router.navigate(['/home']); 
  }

 
 
  

}
