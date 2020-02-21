import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiving-options',
  templateUrl: './receiving-options.page.html',
  styleUrls: ['./receiving-options.page.scss'],
})
export class ReceivingOptionsPage implements OnInit {

  content = "bank";

  constructor() { }

  ngOnInit() {
  }

}
