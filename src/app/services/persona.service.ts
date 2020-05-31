import { Injectable } from '@angular/core';
import { Reserva } from './Reserva';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public IPServidor: String = 'http://192.168.1.100:8080';
  public URLservidor: String;


  listarPersonas(): Observable<any> {
        
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
      return this.http.get<any>(this.URLservidor+'/restful/services/Persona/actions/listarPersonas/invoke'
      , httpOptions );
  }


}


