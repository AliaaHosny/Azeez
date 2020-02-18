import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDetailsTempPage } from './page-details-temp.page';

const routes: Routes = [
  {
    path: '',
    component: PageDetailsTempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDetailsTempPageRoutingModule {}
