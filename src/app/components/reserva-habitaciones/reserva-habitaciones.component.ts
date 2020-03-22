import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Reserva } from './../../models/reserva';
import { ReservaHabitacionService } from  './../../services/reserva-habitacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-habitaciones',
  templateUrl: './reserva-habitaciones.component.html',
  styleUrls: ['./reserva-habitaciones.component.scss'],
})
export class ReservaHabitacionesComponent implements OnInit {
  public onRegisterForm: FormGroup;

  data: Reserva

  constructor (
  private formBuilder: FormBuilder, 
  public reservaHabitacion: ReservaHabitacionService,
  public router: Router
  ) 
  { this.data = new Reserva();}

  reservaHabitacionForm: FormGroup;


  ngOnInit() {    
  }

  // GuardarReserva() {
  //   this.reservaHabitacion.createItem(this.data).subscribe((response) => {
  //     this.router.navigate(['list']);
  //   });

  // }
}
