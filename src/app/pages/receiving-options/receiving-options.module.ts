import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivingOptionsPageRoutingModule } from './receiving-options-routing.module';

import { ReceivingOptionsPage } from './receiving-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivingOptionsPageRoutingModule
  ],
  declarations: [ReceivingOptionsPage]
})
export class ReceivingOptionsPageModule {}
