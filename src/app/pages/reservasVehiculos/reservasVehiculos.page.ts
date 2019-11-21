import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservas-vehiculos',
  templateUrl: './reservasVehiculos.page.html',
  styleUrls: ['./reservasVehiculos.page.scss'],
})
export class ReservasVehiculosPage implements OnInit {
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

  cargarDatos() {
    this.navCtrl.navigateForward('usuarios');
  }

  editarProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  eliminarProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
