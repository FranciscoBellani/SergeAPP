import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Reserva } from './Reserva';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaHabitacionService {

  public fechaInicio: String;
  public fechaFin: String;
  public email: String;
  public consulta: any;

  public nuevafechaInicio:string;
  public nuevafechaFin:string

  constructor(private http: HttpClient) { }
  
  public IPServidor: String = 'http://192.168.0.66:8080';
  public URLservidor: String;
  
  // metodo para crear reserva
  addReserva(reservaParameter: Reserva)     
    {

       this.fechaInicio = reservaParameter.fechaInicio;
       this.fechaFin = reservaParameter.fechaFin;
       this.email=reservaParameter.email;  
       //para quitar el timestamp de IONIC de los datetimepicket
       this.nuevafechaFin = this.fechaFin.split('T')[0];
       this.nuevafechaInicio=this.fechaInicio.split('T')[0];
             
       
       if(window.localStorage.URLservidor){
        this.URLservidor = window.localStorage.URLservidor;
      }else{
        this.URLservidor = this.IPServidor;
      }

        // Http Parametros de validacion y permisos de acceso
      const httpOptions = {
       headers: new HttpHeaders(
        { 
         // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         // "Access-Control-Allow-Origin": "http://localhost:8080",
         // 'Content-Type': 'application/json' ,
          'Accept':  'application/json;profile=urn:org.apache.isis/v1',
          'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',    
         })
        };    
           this.consulta = this.http.post(this.URLservidor+'/restful/services/ReservaHabitacion/actions/crearReservaDeHabitacion/invoke',
            {
             "fechaInicio": {
             "value": this.nuevafechaInicio            
             
            },
              "fechaFin": {
              "value": this.nuevafechaFin
            },
               "email": {
               "value": this.email
            }
          }
           , httpOptions);
             console.log("Consulta: "+ JSON.stringify(this.consulta));
             return this.consulta;           
  }
}