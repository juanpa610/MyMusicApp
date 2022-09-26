import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-icon-fav',
  templateUrl: './icon-fav.component.html',
  styleUrls: ['./icon-fav.component.scss']
})
export class IconFavComponent implements OnInit {

  @Input() iconClass: string = '';
  @Input() idicon: string = '';

  constructor() {
    this.iconClass
   }

  ngOnInit(): void {
  }

 

}
