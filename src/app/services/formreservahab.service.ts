import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class formreservahabService {
    urlReservaHab = 'http://localhost:3002/feriaApi/modules/ferias';

    guardarreservahab(reservahab): Promise<any> {
        
        return new Promise((resolve, reject) => {
            debugger;
            this.http.post(this.urlReservaHab + '/' + 'feriantes', reservahab)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }


    constructor(private http: HttpClient) { }

}