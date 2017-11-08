import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumenClientePage } from './resumen-cliente';

@NgModule({
  declarations: [
    ResumenClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ResumenClientePage),
  ],
})
export class ResumenClientePageModule {}
