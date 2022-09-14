import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() link: string = '';
  @Input() iconClass: string = '';
  @Input() iconTextClass: string = '';
  @Input() iconText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
