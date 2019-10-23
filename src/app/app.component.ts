import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Inicio',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Hacer Reserva',
        url: '/reservas',
        direct: 'forward',
        icon: 'calendar'
      },
      {
        title: 'ABM Usuarios',
        url: '/usuarios',
        direct: 'forward',
        icon: 'people'
      },
      {
        title: 'ABM Habitaciones',
        url: '/habitaciones',
        direct: 'forward',
        icon: 'key'
      },
      {
        title: 'Contacto',
        url: '/about',
        direct: 'forward',
        icon: 'open'
      },
      
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
