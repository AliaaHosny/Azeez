import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkipModalPageRoutingModule } from './skip-modal-routing.module';

import { SkipModalPage } from './skip-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkipModalPageRoutingModule
  ],
  declarations: [SkipModalPage]
})
export class SkipModalPageModule {}
