import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReservaHabitacionesComponent } from './../components/reserva-habitaciones/reserva-habitaciones.component';

@Injectable({
  providedIn: 'root'
})
export class ReservaHabitacionService {

  urlReservaHabitacion = 'aca va la url del POST';  
  constructor(private http: HttpClient) { }

  // aca arranca el nuevo codigo
  sendData() 
  {
    const httpOptions = 
    {
      headers: new HttpHeaders
      ({
        'Accept':  'application/json;profile=urn:org.apache.isis/v1',
        'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',
      })
    }
    let postData = {
            "email": "customer004@email.com",
            "fechainicio": "12/02/2020",
            "fechafin": "12/02/2020"
    }

    this.http.post("aca va la url del POST", postData, httpOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

  }

  guardarReservaHabitacion(habitacion): Promise<any> {
    return new Promise((resolve, reject) => {
        debugger;

        this.http.post(this.urlReservaHabitacion, habitacion)
            .subscribe((response: any) => {
                resolve(response);
            }, reject);
    });
}
  
  }

// aca termina el nuevo codigo
