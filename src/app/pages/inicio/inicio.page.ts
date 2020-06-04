import { Component, OnInit } from '@angular/core';
import { InicioService } from './../../services/inicio.service'
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {

  constructor(
    private inicioService: InicioService,
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  
  goResHab() {
   this.navCtrl.navigateForward('/reservas');
  }

  ngOnInit() {
    
    this.listarHabitaciones();
    this.listarVehiculos();
  }

  habitacionesArray: any;
  vehiculosArray:any;

  listarHabitaciones() {
    this.inicioService.listarHabitaciones().subscribe(data => {
      this.habitacionesArray = data;
      // debugger;

    })
  }

  listarVehiculos() {
    this.inicioService.listarVehiculos().subscribe(data => {
      this.vehiculosArray = data;
      // debugger;

    })
  }

}