import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {VehiculosComponent} from './../components/vehiculos/vehiculos.component';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  urlVehiculo = '';

  guardarVehiculo(vehiculo): Promise<any> {
      return new Promise((resolve, reject) => {
          debugger;
          this.http.post(this.urlVehiculo,vehiculo)
              .subscribe((response: any) => {
                  resolve(response);
              }, reject);
      });
  }

  buscarVehiculoPorMatricula(matricula:String){

  }

  listarVehiculos() {
      return this.http.get(this.urlVehiculo);
  }

  eliminarVehiculo(id:Number): Observable<any> {
      return this.http.delete(this.urlVehiculo);
  }
  
  constructor(private http: HttpClient) { }
}
