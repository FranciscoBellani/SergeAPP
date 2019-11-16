import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  urlReservaHab = 'http://localhost:8080/restful/objects/simple.ReservaHabitacion/1';
    
      getData():Observable<any[]>{
        return this.http.get<any[]>('urlReservaHab');
        
      }

    constructor(private http: HttpClient) { }
}
