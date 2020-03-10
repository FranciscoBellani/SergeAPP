import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomeResultsComponent } from './../components/home-results/home-results.component';

@Injectable({
    providedIn: 'root'
})
export class HomeResultsService {

    urlHabitacion = 'http://localhost:8080/restful/services/Habitacion/actions/listarHabitacionesOcupadas/invoke';

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


    buscarHabitacionPorNombre() {
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

    eliminarHabitacion(id: Number): Observable<any> {
        return this.http.delete(this.urlHabitacion);
    }

    
}
