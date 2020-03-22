import { Component, OnInit } from '@angular/core';
import { HabitacionService } from './../../services/habitacion.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
})
export class HabitacionesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private habitacionService: HabitacionService) { }

  habitacionForm: FormGroup;



  ngOnInit() {
    debugger;
    this.listarHabitaciones();

    this.habitacionForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      ubicacion: new FormControl('', Validators.required),
      categoria: new FormControl(''),
    });
  }

  listarHabitaciones() {
    this.habitacionService.listarHabitaciones().subscribe(capo => {
      debugger;
      let pepe = capo;
      console.log('Success: ', capo);
    },
    error => {
      console.log('Error :', error);
    })
  }

  sendData() {
    const data = this.habitacionForm.getRawValue();
    this.habitacionService.guardarHabitacion(data).then(habitacion => {
      //debugger;
    });

  }

}
