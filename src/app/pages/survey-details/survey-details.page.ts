import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.page.html',
  styleUrls: ['./survey-details.page.scss'],
})
export class SurveyDetailsPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      mode: "ios",
      header: 'Skipping AED 2.0',
      message: 'You are skipping Lego ad and offer',
      buttons: ["Don't Skip", 'Skip']
    });

    await alert.present();
  }
}
