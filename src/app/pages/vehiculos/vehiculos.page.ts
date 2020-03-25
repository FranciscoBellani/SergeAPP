import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VehiculoService } from './../../services/vehiculo.service'
import { Reserva } from 'src/app/models/reserva';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { promise } from 'protractor';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  
  Reservas: any = [];
  


  constructor(
    private vehiculoService: VehiculoService,
    public navCtrl: NavController,
    
    
    ) { }

  ngOnInit() {
    
    this.listarvehiculos();
    
  }

  vehiculosArray: any;

  listarvehiculos() {
    this.vehiculoService.listarvehiculos().subscribe(data => {
      this.vehiculosArray = data;
    })
  }


  cancelarReserva(Reserva, i) {
    if (window.confirm('¿Cancelar esta reserva?')) {
      debugger
      this.vehiculoService.cancelarReserva(Reserva.objectId)
        .subscribe(() => {
          this.Reservas.splice(i, 1);
          console.log('Reserva Cancelada!')
        }
        )
    }
  }
  // cancelarReserva(Reserva, i) {
  //   if (window.confirm('¿Cancelar esta reserva?')) {
  //     debugger
  //     this.vehiculoService.cancelarReserva(Reserva._id)
  //  {
  //         this.Reservas.splice(i, 1);
  //         console.log('Reserva Cancelada')
  //       }
        
  //   }
  // }






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
