import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilleteraClientePage } from './billetera-cliente';

@NgModule({
  declarations: [
    BilleteraClientePage,
  ],
  imports: [
    IonicPageModule.forChild(BilleteraClientePage),
  ],
})
export class BilleteraClientePageModule {}
