import { Component, OnInit } from '@angular/core';
import {VehiculoService} from './../../services/vehiculo.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private vehiculoService: VehiculoService) { }

  vehiculoForm: FormGroup;



  ngOnInit() {
    this.vehiculoForm = this.formBuilder.group({
      matricula: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      color:new FormControl('', Validators.required),
      modelo:new FormControl('', Validators.required),
      combustible:new FormControl('', Validators.required),
      seguro:new FormControl('', Validators.required),
      ubicacion:new FormControl('', Validators.required)
  });
  }

  sendData(){
    const data = this.vehiculoForm.getRawValue();
    this.vehiculoService.guardarVehiculo(data).then(vehiculo => {
        debugger;
    });

  }

}
