import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreshAdsPageRoutingModule } from './fresh-ads-routing.module';

import { FreshAdsPage } from './fresh-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreshAdsPageRoutingModule
  ],
  declarations: [FreshAdsPage]
})
export class FreshAdsPageModule {}
