import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Reserva } from './Reserva';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ReservaHabitacionesComponent } from './../components/reserva-habitaciones/reserva-habitaciones.component';
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
  // metodo para crear reserva
  addReserva(reservaParameter: Reserva)     
    {

       this.fechaInicio = reservaParameter.fechaInicio;
       this.fechaFin = reservaParameter.fechaFin;
       this.email=reservaParameter.email;  
       //para quitar el timestamp de IONIC de los datetimepicket
       this.nuevafechaFin = this.fechaFin.split('T')[0];
       this.nuevafechaInicio=this.fechaInicio.split('T')[0];
             
       
        // Http Parametros de validacion y permisos de acceso
      const httpOptions = {
       headers: new HttpHeaders(
        { 
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Access-Control-Allow-Origin": "http://localhost:8080",
          'Content-Type': 'application/json' ,
          'Accept':  'application/json;profile=urn:org.apache.isis/v1',
          'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',    
         })
        };    
           this.consulta = this.http.post('http://localhost:8080/restful/services/ReservaHabitacion/actions/crearReservaDeHabitacion/invoke',
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
  // Manejo de Errores
  // handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // Problemas de red o del lado del cliente.
  //     console.error('Ocurrio un error:', error.error.message);
  //   } else {
  //     // Se informa cual es el error.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //   'Algo salio mal; Intente mas tarde por favor.');
  // };

}