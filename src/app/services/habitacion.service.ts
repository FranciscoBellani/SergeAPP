import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { HabitacionesComponent } from './../components/habitaciones/habitaciones.component';

@Injectable({
    providedIn: 'root'
})
export class HabitacionService {

    urlHabitacion = 'http://localhost:8080/restful/services/ReservaHabitacion/actions/listarReservasDeHabitacionesActivas/invoke';

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
