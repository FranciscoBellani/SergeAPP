import { Component, OnInit } from '@angular/core';
import { ReservaVehiculoService } from  './../../services/reserva-vehiculo.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-vehiculos',
  templateUrl: './reserva-vehiculos.component.html',
  styleUrls: ['./reserva-vehiculos.component.scss'],
})
export class ReservaVehiculosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private reservaVehiculoService: ReservaVehiculoService) { }

  reservaVehiculoForm: FormGroup;


  ngOnInit() {
    this.reservaVehiculoForm = this.formBuilder.group({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      persona:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required)
  });
  }

  sendData(){
    const data = this.reservaVehiculoForm.getRawValue();
    this.reservaVehiculoService.guardarReservaVehiculo(data).then(reserva => {
        debugger;
    });

  }

}
