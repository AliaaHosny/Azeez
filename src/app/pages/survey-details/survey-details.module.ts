import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyDetailsPageRoutingModule } from './survey-details-routing.module';

import { SurveyDetailsPage } from './survey-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyDetailsPageRoutingModule
  ],
  declarations: [SurveyDetailsPage]
})
export class SurveyDetailsPageModule {}
