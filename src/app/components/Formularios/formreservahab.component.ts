import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';

import { formreservahabService } from './../../services/formreservahab.service';
import { Observable } from 'rxjs';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
@Component({
    selector: 'app-formreservahab',
    templateUrl: './formreservahab.component.html',
    styleUrls: ['./formreservahab.component.css']
})
export class formreservahabComponent {
    tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  formreservahabForm: FormGroup;

    ngOnInit() {
        this.formreservahabForm= this.formBuilder.group({
            nombre: new FormControl('', Validators.required),
            apellido: new FormControl('', Validators.required),
            edad: new FormControl(''),
            visita: new FormControl('')
        });
    }


    onSubmit() {
        // TODO: Use EventEmitter with form value
        debugger;
        const data = this.formreservahabForm.getRawValue();
        this.formreservahabService.guardarreservahab(data).then(formreservahab => {
            debugger;
            let pepe = formreservahab;
        });

    }

    constructor(private formBuilder: FormBuilder, private formreservahabService: formreservahabService) { }
}
export class FormFieldOverviewExample {}
