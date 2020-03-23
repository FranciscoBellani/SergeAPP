import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {VehiculosComponent} from './../components/vehiculos/vehiculos.component';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

    urlHabitacion = 'http://localhost:8080/restful/services/Vehiculo/actions/listarVehiculosOcupados/invoke';

    constructor(private http: HttpClient) { }
    
    listarvehiculos(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept':  'application/json;profile=urn:org.apache.isis/v1',
              'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
            })
        }
        return this.http.get<any>(this.urlHabitacion, httpOptions );
    }
  
}
