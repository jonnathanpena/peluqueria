import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitaClientePage } from './cita-cliente';

@NgModule({
  declarations: [
    CitaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CitaClientePage),
  ],
})
export class CitaClientePageModule {}
