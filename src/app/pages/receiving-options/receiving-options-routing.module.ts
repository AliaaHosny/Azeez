import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivingOptionsPage } from './receiving-options.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivingOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivingOptionsPageRoutingModule {}
