import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoClientePage } from './producto-cliente';

@NgModule({
  declarations: [
    ProductoClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoClientePage),
  ],
})
export class ProductoClientePageModule {}
