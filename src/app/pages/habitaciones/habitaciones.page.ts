import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HabitacionService } from './../../services/habitacion.service'


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.page.html',
  styleUrls: ['./habitaciones.page.scss'],
})
export class HabitacionesPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;

  languages: any = ['English', 'Portuguese', 'French'];
  paymentMethods: any = ['Paypal', 'Credit Card'];
  currencies: any = ['USD', 'BRL', 'EUR'];

  constructor(public navCtrl: NavController, private habitacionService: HabitacionService) { }

  ngOnInit() 
  {    
    this.listarHabitaciones();
  }
  habitacionesArray: any;

  listarHabitaciones() {
    this.habitacionService.listarHabitaciones().subscribe(data => {
      this.habitacionesArray = data;
    })
  }

  cargarProfile() {
    this.navCtrl.navigateForward('');
  }

  editarProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  eliminarProfile() {
    this.navCtrl.navigateForward('');
  }


  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
