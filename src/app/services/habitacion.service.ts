import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HabitacionService {

    urlHabitacion = 'http://localhost:8080/restful/services/ReservaHabitacion/actions/listarReservasDeHabitacionesActivas/invoke';

    constructor(private http: HttpClient) { }
    
    httpOptions = {
        headers: new HttpHeaders(
          { 
            'Accept':  'application/json;profile=urn:org.apache.isis/v1',
            'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
        })
      };

    listarHabitaciones(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.urlHabitacion, httpOptions );
    }

    listarHabitacionesDisponibles(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>('http://localhost:8080/restful/services/Habitacion/actions/listarHabitacionesDisponibles/invoke', httpOptions );
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
    
    cancelarReserva(id:String): any
    {
        const httpOptions = {
            headers: new HttpHeaders({
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                'Content-Type': 'application/json' ,
                'Accept':  'application/json;profile=urn:org.apache.isis/v1',
                'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==', 
                
          })
        }
       
       return this.http.post("http://localhost:8080/restful/objects/simple.ReservaHabitacion/"+id+"/actions/cancelar/invoke",{}, this.httpOptions)
           .subscribe(data => {
             console.log(data['_body']);
            }, error => {
             console.log(error);
           });
    }

}
