import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallecitaClientePage } from './detallecita-cliente';

@NgModule({
  declarations: [
    DetallecitaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallecitaClientePage),
  ],
})
export class DetallecitaClientePageModule {}
