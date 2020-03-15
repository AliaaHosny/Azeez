import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-modal',
  templateUrl: './notifications-modal.page.html',
  styleUrls: ['./notifications-modal.page.scss'],
})
export class NotificationsModalPage implements OnInit {

  @Input() icon: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }
  test(){
    console.log('test fired')
  }

}
