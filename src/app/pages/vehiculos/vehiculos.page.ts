import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;

  languages: any = ['English', 'Portuguese', 'French'];
  paymentMethods: any = ['Paypal', 'Credit Card'];
  currencies: any = ['USD', 'BRL', 'EUR'];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  cargarProfile() {
    this.navCtrl.navigateForward('/vehiculos');
  }

  editarProfile() {
    this.navCtrl.navigateForward('vehiculos');
  }
  
  eliminarProfile() {
    this.navCtrl.navigateForward('vehiculos');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
