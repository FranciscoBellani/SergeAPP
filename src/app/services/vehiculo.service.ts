import { Injectable } from '@angular/core';
import { Reserva } from './Reserva';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

    urlVehiculo = 'http://localhost:8080/restful/services/Vehiculo/actions/listarVehiculosOcupados/invoke';
    public _id: Number;

    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders(
        { 
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Access-Control-Allow-Origin": "http://localhost:8080",
          'Content-Type': 'application/json' ,
          'Accept':  'application/json;profile=urn:org.apache.isis/v1',
          'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==', 
      })
    };
    
    listarvehiculos(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.urlVehiculo, httpOptions );
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

    //  cancelarReserva(id): Promise<Reserva[]> {       
    //    return new Promise((resolve, reject) =>{
    //       debugger;
    //       this.http.post('http://localhost:8080/restful/objects/simple.ReservaVehiculo/1/actions/cancelar/invoke' + id, null,this.httpOptions)
    //           .subscribe((response: any) => {
    //               resolve(response);
    //    }, reject);
    //    });
       
    cancelarReserva(id): Observable<Reserva[]> 
    {
      
      return this.http.delete<Reserva[]>('http://localhost:8080/restful/objects/simple.ReservaVehiculo/1/actions/cancelar/invoke' + id, this.httpOptions)
        .pipe(
          tap(_ => console.log(`Reserva Eliminada: ${id}`)),
          catchError(this.handleError<Reserva[]>('Reserva Eliminada correctamente'))
        );
    }
    

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
  
}
