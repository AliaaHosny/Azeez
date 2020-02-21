import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransferModalPage } from '../transfer-modal/transfer-modal.page';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.page.html',
  styleUrls: ['./my-wallet.page.scss'],
})
export class MyWalletPage implements OnInit {
  content = "earned"
  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: TransferModalPage,
      cssClass: 'auto-height'
    });
    return await modal.present();
  }
}
