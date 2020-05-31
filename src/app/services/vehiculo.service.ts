import { Injectable } from '@angular/core';
import { Reserva } from './Reserva';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

    urlVehiculo = 'http://localhost:8080/restful/services/ReservaVehiculo/actions/listarReservasDeVehiculosActivas/invoke';
    public reservaId: any;
    public consulta: any;
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
    
    listarvehiculos(): Observable<any> {
      
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
        return this.http.get<any>(this.URLservidor+'/restful/services/ReservaVehiculo/actions/listarReservasDeVehiculosActivas/invoke'
        ,httpOptions );
    }

    guardarVehiculo(vehiculo): Promise<any> {
      
      return new Promise((resolve, reject) => {
          debugger;

          this.http.post(this.urlVehiculo, vehiculo)
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
               // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
               // "Access-Control-Allow-Origin": "http://localhost:8080",
               // 'Content-Type': 'application/json' ,
                'Accept':  'application/json;profile=urn:org.apache.isis/v1',
                'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==', 
                
          })
        }
       
       return this.http.post(this.URLservidor+"/restful/objects/simple.ReservaVehiculo/"+id+"/actions/cancelar/invoke",{}, this.httpOptions)
           .subscribe(data => {
             console.log(data['_body']);
            }, error => {
             console.log(error);
           });
    }
    listarvehiculosDisponibles(): Observable<any> {
        
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

      
      return this.http.get<any>(this.URLservidor+'/restful/services/Vehiculo/actions/listarVehiculosDisponibles/invoke'
      , httpOptions );
  }
   
}
