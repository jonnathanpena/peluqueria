import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DashboardClientePage } from '../pages/dashboard-cliente/dashboard-cliente';
import { CalendarioClientePage } from '../pages/calendario-cliente/calendario-cliente';
import { ProductoClientePage } from '../pages/producto-cliente/producto-cliente';
import { BilleteraClientePage } from '../pages/billetera-cliente/billetera-cliente';
import { CitaClientePage } from '../pages/cita-cliente/cita-cliente';
import { DetallecitaClientePage } from '../pages/detallecita-cliente/detallecita-cliente';
import { ResumenClientePage } from '../pages/resumen-cliente/resumen-cliente';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DashboardClientePage,
    CalendarioClientePage,
    ProductoClientePage,
    BilleteraClientePage,
    CitaClientePage,
    DetallecitaClientePage,
    ResumenClientePage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DashboardClientePage,
    CalendarioClientePage,
    ProductoClientePage,
    BilleteraClientePage,
    CitaClientePage,
    DetallecitaClientePage,
    ResumenClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
