import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreshAdsPage } from './fresh-ads.page';

const routes: Routes = [
  {
    path: '',
    component: FreshAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreshAdsPageRoutingModule {}
