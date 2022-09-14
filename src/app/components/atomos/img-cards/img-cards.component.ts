import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-cards',
  templateUrl: './img-cards.component.html',
  styleUrls: ['./img-cards.component.scss']
})
export class ImgCardsComponent implements OnInit {

  @Input() srcCards: string ='';
  @Input() classImg: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
