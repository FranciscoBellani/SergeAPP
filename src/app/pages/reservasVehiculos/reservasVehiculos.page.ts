import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaVehiculoService } from './../../services/reserva-vehiculo.service';
import { VehiculoService } from './../../services/vehiculo.service';
import { ToastService } from './../../services/toast.service';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-reservas-vehiculos',
  templateUrl: './reservasVehiculos.page.html',
  styleUrls: ['./reservasVehiculos.page.scss'],
})
export class ReservasVehiculosPage implements OnInit {
  public ReservaForm: FormGroup;
  inputValue: string = "";   
  public longitud: any;
  public disponibles = [];
  public correoEmail: any;
  public personas = [];
  public resultadosArraytempP= [];    

  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();

  constructor(

    public reservaVehiculo: ReservaVehiculoService,
    public vehiculoService: VehiculoService,
    public personaService: PersonaService, 
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone,
    private toastService: ToastService,
    public toastController: ToastController

  ) {
    this.ReservaForm = this.formBuilder.group
      ({
        fechaInicio: [''],
        fechaFin: [''],
        email: ['']
      })
  }


  ngOnInit() {
    this.ReservaForm = this.formBuilder.group({
      'fechaInicio': [null, Validators.compose([
        Validators.required
      ])],
      'fechaFin': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])]
    });
  
    this.vehiculoService.listarvehiculosDisponibles()
    .subscribe(
    datos => {
        this.disponibles=datos
        this.longitud=this.disponibles.length
    });
  
    this.personaService.listarPersonas()
    .subscribe(
    datos => {
        this.personas=datos
        this.resultadosArraytempP = this.personas
    });
  
  }
  
  onSubmit() {
    debugger
  
    const largoArray=this.longitud;
    
    if(this.ReservaForm.valid){
          
          this.correoEmail=this.inputValue.toString();
          
          this.resultadosArraytempP =this.personas;
  
          var index:number = this.resultadosArraytempP.indexOf(this.resultadosArraytempP.find(x => x.email == this.correoEmail));
    
          if(index!=-1){
           
              if(largoArray>1){
                     this.reservaVehiculo.addReserva(this.ReservaForm.value)
                     .subscribe(data => {
                     alert("EXITO "+data);
                     this.toastService.presentToast('Reserva guardada. Muchas Gracias');
                     this.ReservaForm.reset();
                     }, (err) => {
                          alert("Fallo");
                          this.toastService.presentToast('Error, consulte con el administrador');
                     });
          
              }else{
                 this.showToastWithCloseButton();
              }
        
          }else{
             this.toastService.presentToast('Error, Email Incorrecto');
          }
    }else{
        return false;
    }
  }
  
  async showToastWithCloseButton() {
    const toast = await this.toastController.create({
      message: 'No hay Vehiculos Disponibles.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
