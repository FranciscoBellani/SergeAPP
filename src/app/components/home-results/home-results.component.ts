import { Component, OnInit } from '@angular/core';
import { HabitacionService } from './../../services/habitacion.service'
import { HomeResultsService } from './../../services/home-results.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
  styleUrls: ['./home-results.component.scss'],
})
export class HomeResultsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private homeResultsService: HomeResultsService) { }

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
    this.homeResultsService.listarHabitaciones().subscribe(capo => {
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
    this.homeResultsService.guardarHabitacion(data).then(habitacion => {
      //debugger;
    });

  }

}
