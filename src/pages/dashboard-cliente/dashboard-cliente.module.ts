import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardClientePage } from './dashboard-cliente';

@NgModule({
  declarations: [
    DashboardClientePage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardClientePage),
  ],
})
export class DashboardClientePageModule {}
