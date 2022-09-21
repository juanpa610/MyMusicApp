import { Location } from '@angular/common';
import { Component, Input ,AfterViewInit} from '@angular/core';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements AfterViewInit {


  @Input() link: string = '';
  @Input() iconClass: string = '';
  @Input() iconTextClass: string = '';
  @Input() iconText: string = '';
  @Input() iconId: string = '';
  @Input() idRedirect: string = '';

  constructor(private location: Location, private iconService: IconServiceService) { }

  ngAfterViewInit(): void {

    this.rout(this.iconService.iconActiveName)
  }

  rout(id: string){

    if(document.getElementById(id)?.attributes[4].value === '/home'){
      document.getElementById('home')?.classList.replace('bi-house', 'bi-house-fill');
      this.iconService.iconActiveName='homeredirect';
    }else if(document.getElementById(id)?.attributes[4].value === '/search'){
      document.getElementById('search')?.classList.replace('bi-search', 'bi-search-heart-fill');
      
      document.getElementById('home')?.classList.replace( 'bi-house-fill', 'bi-house');

      this.iconService.iconActiveName='searchredirect';
    }else if(document.getElementById(id)?.attributes[4].value === '/favoritos'){
      document.getElementById('favoritos')?.classList.replace('bi-heart', 'bi-heart-fill');
      
      document.getElementById('home')?.classList.replace( 'bi-house-fill', 'bi-house');

      this.iconService.iconActiveName='favoritosredirect';
    }

  }

}
