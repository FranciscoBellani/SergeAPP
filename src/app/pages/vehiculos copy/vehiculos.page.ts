import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service'



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  
  

  Reservas: any = [];
  public consulta: any;
  
  constructor(
    
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private vehiculoService: VehiculoService
    ) { }

    

  ngOnInit() {
    
     this.listarvehiculos();

  }

  vehiculosArray: any;

  listarvehiculos() {
    this.vehiculoService.listarvehiculos().subscribe(data => {
      this.vehiculosArray = data;
    })
  }


  cargarProfile() {
    this.navCtrl.navigateForward('/vehiculos');
  }

  editarProfile() {
    this.navCtrl.navigateForward('vehiculos');
  }
  
  eliminarProfile() {
    this.navCtrl.navigateForward('vehiculos');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

  irCancelarReserva() {
    this.navCtrl.navigateRoot('/cancelarreserva');
  }

}