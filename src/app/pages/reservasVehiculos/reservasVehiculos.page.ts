import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaVehiculoService } from './../../services/reserva-vehiculo.service'

@Component({
  selector: 'app-reservas-vehiculos',
  templateUrl: './reservasVehiculos.page.html',
  styleUrls: ['./reservasVehiculos.page.scss'],
})
export class ReservasVehiculosPage implements OnInit {
  public ReservaForm: FormGroup;

  constructor(
    
    public reservaVehiculo: ReservaVehiculoService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone
    
    )
     {
      this.ReservaForm = this.formBuilder.group
      ({
        fechaInicio: [''],
        fechaFin: [''],
        email: ['']
      })
     }

  
  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.ReservaForm.valid) {
      return false;
    } else {
      this.reservaVehiculo.addReserva(this.ReservaForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.ReservaForm.reset();
            // this.router.navigate(['/home-result']);
            
          })
        });
    }

  // cargarDatos() {
  //   this.navCtrl.navigateForward('usuarios');
  // }

  // editarProfile() {
  //   this.navCtrl.navigateForward('edit-profile');
  // }

  // eliminarProfile() {
  //   this.navCtrl.navigateForward('edit-profile');
  // }

  // logout() {
  //   this.navCtrl.navigateRoot('/');
  // }

}
}
