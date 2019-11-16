import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservaVehiculosComponent } from './../components/reserva-vehiculos/reserva-vehiculos.component';

@Injectable({
  providedIn: 'root'
})
export class ReservaVehiculoService {

  urlReservaVehiculo = '';

  guardarReservaVehiculo(reservaVehiculo): Promise<any> {
      return new Promise((resolve, reject) => {
          debugger;
          this.http.post(this.urlReservaVehiculo,reservaVehiculo)
              .subscribe((response: any) => {
                  resolve(response);
              }, reject);
      });
  }


  cancelarReservasVehiculos() {
      
  }

  listarReservasVehiculos() {
      return this.http.get(this.urlReservaVehiculo);
  }

  eliminarReservasVehiculo(id:Number): Observable<any> {
      return this.http.delete(this.urlReservaVehiculo);
  }
  
  constructor(private http: HttpClient) { }
}
