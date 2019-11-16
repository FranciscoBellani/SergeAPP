import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './../../services/usuario.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  usuarioForm: FormGroup;


  ngOnInit() {

    this.usuarioForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion:new FormControl('', Validators.required),
      telefono:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      dni:new FormControl('', Validators.required),
      jerarquia:new FormControl('', Validators.required),
      sexo:new FormControl('', Validators.required)
  });
  }


  sendData(){
    const data = this.usuarioForm.getRawValue();
    this.usuarioService.guardarUsuario(data).then(usuario => {
        debugger;
    });

  }

}
