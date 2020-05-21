import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HabitacionService } from './../../services/habitacion.service'
import { debug } from 'util';
import { ToastService } from './../../services/toast.service';

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
  Reservas: any = [];

  constructor(public navCtrl: NavController, private habitacionService: HabitacionService,private toastService: ToastService,) { }

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

  cancelarReserva(id:String) {
    if (window.confirm('¿Cancelar esta reserva?')) {
      debugger
      if(this.habitacionService.cancelarReserva(id))
      {
        this.toastService.presentToast('Reserva Cancelada. Muchas Gracias');
        this.Reservas.splice(id, 1);
        console.log('Reserva Cancelada');
        this.navCtrl.navigateForward('/habitaciones');
      }
      else{
        this.toastService.presentToast('Error, consulte con el administrador');
      }
  }
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
