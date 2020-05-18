import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from './../../services/vehiculo.service'
import { debug } from 'util';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  
  idReserva='idreserva';

  Reservas: any = [];
  public consulta: any;
  
  constructor(
    
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private vehiculoService: VehiculoService
    ) { }
    public arrayAutorizacion: any = [];
    public solicitanteEmpresa: String;
    public solicitanteTrabajador: String;
    public solicitanteVehiculo: String;
    public empresasEjecutantes: any =[];
    public empresasEjecutantesLargo: any;
    public trabajadoresEjecutantes: any;
    public trabajadoresEjecutantesLargo :any;
    public vehiculosEjecutantes: any;
    public vehiculosEjecutantesLargo: any;
    public permiteBtnCerrar: boolean;
    public recipeId: any;
    public FechaHoraPersonalizada: any;
    //private alertCtrl: AlertController;
    public inputFecha: any;
    public inputHora: any;
    public inputMotivo: any;
    public fechaHoraUnidas: any;
    

  ngOnInit() {
    
     this.listarvehiculos();


  }

  vehiculosArray: any;

  listarvehiculos() {
    this.vehiculoService.listarvehiculos().subscribe(data => {
      this.vehiculosArray = data;
    })
  }

  cancelarReserva(id:String) {
    if (window.confirm('¿Cancelar esta reserva?')) {
      //debugger
      this.vehiculoService.cancelarReserva(id)
      {
        this.Reservas.splice(id, 1);
        console.log('Reserva Cancelada');
        this.navCtrl.navigateForward('/vehiculos');
      } 
  }
  }

}