import { Component, OnInit } from '@angular/core';
import { ReservaHabitacionService } from  './../../services/reserva-habitacion.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-habitaciones',
  templateUrl: './reserva-habitaciones.component.html',
  styleUrls: ['./reserva-habitaciones.component.scss'],
})
export class ReservaHabitacionesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private reservaHabitacionService: ReservaHabitacionService) { }

  reservaHabitacionForm: FormGroup;


  ngOnInit() {
    this.reservaHabitacionForm = this.formBuilder.group({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      persona:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required)
  });
  }

  sendData(){
    const data = this.reservaHabitacionForm.getRawValue();
    this.reservaHabitacionService.guardarReservaHabitacion(data).then(reserva => {
        debugger;
    });

  }

}
