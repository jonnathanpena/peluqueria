import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductoClientePage } from '../pages/producto-cliente/producto-cliente';
import { BilleteraClientePage } from '../pages/billetera-cliente/billetera-cliente';
import { CitaClientePage } from '../pages/cita-cliente/cita-cliente';
import { DashboardClientePage } from '../pages/dashboard-cliente/dashboard-cliente';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icono: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icono: "home", title: 'Home', component: DashboardClientePage },
      { icono: "calendar", title: 'Nueva Cita', component: ProductoClientePage },
      { icono: "clock", title: 'Consultar Cita', component: CitaClientePage },
      { icono: "cash", title: 'Billetera', component: BilleteraClientePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
