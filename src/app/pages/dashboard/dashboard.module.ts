import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -8,
      "outerStrokeWidth": 8,
      "innerStrokeWidth": 8,
      "outerStrokeGradient": true,
      "outerStrokeColor": "#ffffff",
      "outerStrokeGradientStopColor":"#BADFF5",
      "innerStrokeColor": "#4ABDF6",
      "titleColor": "#ffffff",
      "unitsColor": "#ffffff",
      "titleFontSize": '30',
      "unitsFontSize": '30',
      "animationDuration": 500,
      "showBackground": false,
      "showSubtitle": false,
      "clockwise": false
    })
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
