import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaHabitacionService } from './../../services/reserva-habitacion.service'
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-reservas-habitaciones',
  templateUrl: './reservasHabitaciones.page.html',
  styleUrls: ['./reservasHabitaciones.page.scss'],
})
export class ReservasHabitacionesPage implements OnInit {
  public ReservaForm: FormGroup;

  constructor(

    public reservaHabitacion: ReservaHabitacionService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone,
    private toastService: ToastService,
    
    ) {
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
    if (!this.ReservaForm.valid) { return false; }
    else {
      if
        (
        this.reservaHabitacion.addReserva(this.ReservaForm.value)
          .subscribe((res) => {
            this.zone.run(() => {
              console.log(res)
              this.toastService.presentToast('Reserva guardada. Muchas Gracias');
              this.ReservaForm.reset();
            })
          })
      ) {
        this.toastService.presentToast('Error, consulte con el administrador');
      }
    }
  }

}
