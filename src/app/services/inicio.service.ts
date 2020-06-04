import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

// import { HomeResultsComponent } from './../components/home-results/home-results.component';

@Injectable({
    providedIn: 'root'
})
export class InicioService {

    urlHabitacion = 'http://localhost:8080/restful/services/Habitacion/actions/listarHabitacionesDisponibles/invoke';

    urlVehiculo = 'http://localhost:8080/restful/services/Vehiculo/actions/listarVehiculosDisponibles/invoke';

    constructor(private http: HttpClient) { }
    
    listarHabitaciones(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.urlHabitacion, httpOptions );
    }

    listarVehiculos(): Observable<any> {
      const httpOptions = {
          headers: new HttpHeaders({
            'Accept':  'application/json;profile=urn:org.apache.isis/v1',
            'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
          })
      }
      return this.http.get<any>(this.urlVehiculo, httpOptions );
  }

    // Manejo de Errores
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Problemas de red o del lado del cliente.
      console.error('Ocurrio un error:', error.error.message);
    } else {
      // Se informa cual es el error.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
    'Algo salio mal; Intente mas tarde por favor.');
  };

    guardarHabitacion(habitacion): Promise<any> {
        return new Promise((resolve, reject) => {
            debugger;

            this.http.post(this.urlHabitacion, habitacion)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
