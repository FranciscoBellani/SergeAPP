import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HabitacionService {

    urlHabitacion = 'http://localhost:8080/restful/services/ReservaHabitacion/actions/listarReservasDeHabitacionesActivas/invoke';

    constructor(private http: HttpClient) { }
    
    public IPServidor: String = 'http://192.168.1.100:8080';
    public URLservidor: String;
  

    httpOptions = {
        headers: new HttpHeaders(
          { 
            'Accept':  'application/json;profile=urn:org.apache.isis/v1',
            'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
        })
      };

    listarHabitaciones(): Observable<any> {
        
        if(window.localStorage.URLservidor){
            this.URLservidor = window.localStorage.URLservidor;
          }else{
            this.URLservidor = this.IPServidor;
          }
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.URLservidor+'/restful/services/ReservaHabitacion/actions/listarReservasDeHabitacionesActivas/invoke'
        , httpOptions );
    }

    listarHabitacionesDisponibles(): Observable<any> {
        
        if(window.localStorage.URLservidor){
            this.URLservidor = window.localStorage.URLservidor;
          }else{
            this.URLservidor = this.IPServidor;
          }
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.URLservidor+'/restful/services/Habitacion/actions/listarHabitacionesDisponibles/invoke'
        , httpOptions );
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
        
        if(window.localStorage.URLservidor){
            this.URLservidor = window.localStorage.URLservidor;
          }else{
            this.URLservidor = this.IPServidor;
          }

        const httpOptions = {
            headers: new HttpHeaders({
                //"Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                //"Access-Control-Allow-Origin": "http://localhost:8080",
                //'Content-Type': 'application/json' ,
                'Accept':  'application/json;profile=urn:org.apache.isis/v1',
                'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==', 
                
          })
        }
       
       return this.http.post(this.URLservidor+"/restful/objects/simple.ReservaHabitacion/"+id+"/actions/cancelar/invoke",{}, this.httpOptions)
           .subscribe(data => {
             console.log(data['_body']);
            }, error => {
             console.log(error);
           });
    }
}
