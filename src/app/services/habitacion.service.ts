import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HabitacionesComponent} from './../components/habitaciones/habitaciones.component';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  urlHabitacion = '';

  guardarHabitacion(habitacion): Promise<any> {
      return new Promise((resolve, reject) => {
          debugger;
          this.http.post(this.urlHabitacion,habitacion)
              .subscribe((response: any) => {
                  resolve(response);
              }, reject);
      });
  }

  buscarHabitacionPorNombre(){
      
  }

  listarHabitaciones() {
      return this.http.get(this.urlHabitacion);
  }

  eliminarHabitacion(id:Number): Observable<any> {
      return this.http.delete(this.urlHabitacion);
  }
  
  constructor(private http: HttpClient) { }
}
