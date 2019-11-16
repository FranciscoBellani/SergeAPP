import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {UsuariosComponent} from './../components/usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuario = 'http://localhost:8080/restful/services/simple.PersonaMenu/actions/crearPersona/invoke';

    guardarUsuario(usuario): Promise<any> {
        return new Promise((resolve, reject) => {
            debugger;
            this.http.post(this.urlUsuario,usuario)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    buscaUsuarioPorNombre(nombre:String){

    }

    listarUsuarios() {
        return this.http.get(this.urlUsuario);
    }

    eliminarUsuario(id:Number): Observable<any> {
        return this.http.delete(this.urlUsuario);
    }
    
    constructor(private http: HttpClient) { }
}
