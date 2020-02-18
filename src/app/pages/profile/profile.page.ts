import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  logScrolling(event) {
    // console.log(event);
    if (event.detail.scrollTop <= 220 - 44) {
      document.getElementById("idHeader").style.display = "none";
      document.getElementById("idHeader").style.order = "1";
    } else if( event.detail.scrollTop >= 220 )  {
      document.getElementById("idHeader").style.order = "-1";
      document.getElementById("idHeader").style.display = "flex";
  
    }
  }

}
