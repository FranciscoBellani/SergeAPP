import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from './../../services/vehiculo.service'
import { debug } from 'util';
import { ToastService } from './../../services/toast.service';


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
    private vehiculoService: VehiculoService,
    private toastService: ToastService,
    
    ) { }

    public arrayVehiculos : any = null;
    public resultadosArraytemp : any;
    public resultadosArrayFiltrado = [];

   
  ngOnInit() {    
     this.listarTodoslosVehiculos();
  }

  listarTodoslosVehiculos() {
    this.arrayVehiculos = [];
    this.resultadosArrayFiltrado = [];
    this.vehiculoService.listarvehiculos()
    .subscribe(
      contenidoObtenido => {
        this.arrayVehiculos = contenidoObtenido;
        this.resultadosArraytemp = this.arrayVehiculos;
        this.resultadosArraytemp.pop()
      
        const largoArray = this.resultadosArraytemp.length;
        for (var i = 0; i < largoArray;) 
         {                 
            this.resultadosArrayFiltrado.push(this.arrayVehiculos[i]);         
             i = i+1;
        }        
        this.resultadosArrayFiltrado.sort(( a, b ) => parseInt(a.$$instanceId, 10) - parseInt(b.$$instanceId, 10) )        
        this.arrayVehiculos = this.resultadosArrayFiltrado;       
    });
  } 

  cancelarReserva(id:String) {
    if (window.confirm('¿Cancelar esta reserva?')) {
      debugger
      if(this.vehiculoService.cancelarReserva(id))
      {
        this.toastService.presentToast('Reserva Cancelada. Muchas Gracias');
        this.Reservas.splice(id, 1);
        console.log('Reserva Cancelada');
        this.navCtrl.navigateForward('/vehiculos');
      }
      else{
        this.toastService.presentToast('Error, consulte con el administrador');
      }
  }
  }
}