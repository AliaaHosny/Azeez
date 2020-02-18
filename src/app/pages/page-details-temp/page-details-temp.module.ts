import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDetailsTempPageRoutingModule } from './page-details-temp-routing.module';

import { PageDetailsTempPage } from './page-details-temp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDetailsTempPageRoutingModule
  ],
  declarations: [PageDetailsTempPage]
})
export class PageDetailsTempPageModule {}
