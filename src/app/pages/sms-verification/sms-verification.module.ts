import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SmsVerificationPageRoutingModule } from './sms-verification-routing.module';
import { SmsVerificationPage } from './sms-verification.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsVerificationPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [SmsVerificationPage]
})
export class SmsVerificationPageModule {}
