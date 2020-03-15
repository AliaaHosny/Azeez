import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'receiving-options',
    loadChildren: () => import('./pages/receiving-options/receiving-options.module').then( m => m.ReceivingOptionsPageModule)
  },
  {
    path: 'sms-verification',
    loadChildren: () => import('./pages/sms-verification/sms-verification.module').then( m => m.SmsVerificationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'fresh-ads',
    loadChildren: () => import('./pages/fresh-ads/fresh-ads.module').then( m => m.FreshAdsPageModule)
  },
  {
    path: 'ad-details',
    loadChildren: () => import('./pages/ad-details/ad-details.module').then( m => m.AdDetailsPageModule)
  },
  {
    path: 'skip-modal',
    loadChildren: () => import('./pages/skip-modal/skip-modal.module').then( m => m.SkipModalPageModule)
  },
  {
    path: 'survey-details',
    loadChildren: () => import('./pages/survey-details/survey-details.module').then( m => m.SurveyDetailsPageModule)
  },
  {
    path: 'my-wallet',
    loadChildren: () => import('./pages/my-wallet/my-wallet.module').then( m => m.MyWalletPageModule)
  },
  {
    path: 'transfer-modal',
    loadChildren: () => import('./pages/transfer-modal/transfer-modal.module').then( m => m.TransferModalPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./pages/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'page-details-temp',
    loadChildren: () => import('./pages/page-details-temp/page-details-temp.module').then( m => m.PageDetailsTempPageModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('./pages/ads/ads.module').then( m => m.AdsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
