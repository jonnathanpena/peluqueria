import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioClientePage } from './calendario-cliente';

@NgModule({
  declarations: [
    CalendarioClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioClientePage),
  ],
})
export class CalendarioClientePageModule {}
