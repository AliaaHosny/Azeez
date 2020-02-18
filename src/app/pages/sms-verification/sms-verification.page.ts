import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-verification',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})
export class SmsVerificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder:'',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'background': 'transparent',
      'border' : '0',
      'border-bottom' :'1px solid #c5c5c5',
      'border-radius':'0'
    }
  };

}
