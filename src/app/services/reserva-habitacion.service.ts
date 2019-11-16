import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservaHabitacionesComponent } from './../components/reserva-habitaciones/reserva-habitaciones.component';

@Injectable({
  providedIn: 'root'
})
export class ReservaHabitacionService {

  urlReservaHabitacion = 'http://localhost:8080/restful/objects/';

  guardarReservaHabitacion(reservaHabitacion): Promise<any> {
      return new Promise((resolve, reject) => {
          debugger;
          this.http.post(this.urlReservaHabitacion+'simple.Habitacion/',reservaHabitacion)
              .subscribe((response: any) => {
                  resolve(response);
              }, reject);
      });
  }

  cancelarReservasHabitaciones() {
      
  }


  listarReservasHabitaciones() {
      return this.http.get(this.urlReservaHabitacion);
  }

  eliminarReservasHabitacion(id:Number): Observable<any> {
      return this.http.delete(this.urlReservaHabitacion);
  }
  
  constructor(private http: HttpClient) { }
}
