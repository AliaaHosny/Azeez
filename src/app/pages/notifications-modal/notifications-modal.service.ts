import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationsModalPage } from './notifications-modal.page';

type ModalPosition = "top" | "bottom";

@Injectable({
  providedIn: 'root'
})
export class NotificationsModalService {

  constructor(public modalController: ModalController) { }


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
    setTimeout(() => modal.dismiss(), 2500);
  }
}
