import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Reserva } from './../../models/reserva';
import { ReservaHabitacionService } from './../../services/reserva-habitacion.service'
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  public ReservaForm: FormGroup;

  
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();

  constructor(
    public reservaHabitacion: ReservaHabitacionService,    
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone,
    private toastService: ToastService,
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
    this.ReservaForm = this.formBuilder.group({
      'fechaInicio': [null, Validators.compose([
        Validators.required
      ])],
      'fechaFin': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])]
    });
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
