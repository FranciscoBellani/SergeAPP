import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.page.html',
  styleUrls: ['./cargar-datos.page.scss'],
})
export class CargarDatosPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Datos guardados!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }

}
