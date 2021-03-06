import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationsModalPage } from '../notifications-modal/notifications-modal.page';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async showNotification() {
    const modal = await this.modalController.create({
      component: NotificationsModalPage,
      cssClass: 'auto-height notifications top',
      componentProps: {
        'icon': 'notifications-outline',
        'message': 'Congrats! AED 9.00 Added to your account!'
      },
      backdropDismiss: false,
      showBackdrop: false,
    });
    await modal.present();
    setTimeout(() => modal.dismiss(), 1000);
  }

}
