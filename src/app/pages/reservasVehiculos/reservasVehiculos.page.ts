import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaVehiculoService } from './../../services/reserva-vehiculo.service';
import { VehiculoService } from './../../services/vehiculo.service';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-reservas-vehiculos',
  templateUrl: './reservasVehiculos.page.html',
  styleUrls: ['./reservasVehiculos.page.scss'],
})
export class ReservasVehiculosPage implements OnInit {
  public ReservaForm: FormGroup;
      
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();

  constructor(

    public reservaVehiculo: ReservaVehiculoService,
    public vehiculoService:VehiculoService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone,
    private toastService: ToastService,
    public toastController: ToastController

  ) {
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
  
  

}
