import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-cards',
  templateUrl: './text-cards.component.html',
  styleUrls: ['./text-cards.component.scss']
})
export class TextCardsComponent implements OnInit {

  @Input() figureTtext: string = '';
  @Input() classFigcapation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
