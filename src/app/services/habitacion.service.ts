import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HabitacionesComponent } from './../components/habitaciones/habitaciones.component';

@Injectable({
    providedIn: 'root'
})
export class HabitacionService {

    urlHabitacion = 'http://localhost:8080/restful/services/simple.HabitacionMenu/actions/listarHabitaciones/invoke';

    guardarHabitacion(habitacion): Promise<any> {
        return new Promise((resolve, reject) => {
            debugger;
            this.http.post(this.urlHabitacion, habitacion)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    buscarHabitacionPorNombre() {

    }

    listarHabitaciones(): Observable<any> {
        // return new Promise((resolve, reject) => {
        debugger;
        return this.http.get<any>(this.urlHabitacion);
        //     this.http.get(this.urlHabitacion).subscribe(data => {
        //         debugger;
        //         let pepe = data;
        //         resolve(data);
        //     });
        // })

    }

    eliminarHabitacion(id: Number): Observable<any> {
        return this.http.delete(this.urlHabitacion);
    }

    constructor(private http: HttpClient) { }
}
