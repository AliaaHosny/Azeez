import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state, stagger, query, group } from '@angular/animations';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
  animations: [
    trigger('filterMenu', [
      state('bottom', style({
        bottom: '10px',
        height: '56px',
        width: '56px',
      })),
      state('middle', style({
        bottom: '25%',
        width: '70%',
        height: '70vw',
      })),
      state('show', style({
        visibility: 'visible',
        opacity:'1',
      })),
      state('hide', style({
        visibility: 'hidden',
        opacity:'0',
      })),
      transition('bottom => middle', animate('100ms ease-in')),
      transition('middle => bottom', animate('100ms 100ms ease-in')),
      transition('hide => show', animate('200ms 100ms ease-in')),
      transition('show => hide', animate('100ms ease-out'))

    ])
  ]
})
export class AdsPage implements OnInit {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
