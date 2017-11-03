import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

//importo el componente de dashboard cliente
import { DashboardClientePage } from '../dashboard-cliente/dashboard-cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: String="";
  clave: String="";

  constructor(public navCtrl: NavController) {

  }

  entrar(){
    if(this.usuario == 'cliente'){
      this.navCtrl.setRoot(DashboardClientePage);
    }
  }

}
