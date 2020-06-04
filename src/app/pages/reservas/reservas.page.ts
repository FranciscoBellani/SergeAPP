import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Reserva } from './../../models/reserva';
import { ReservaHabitacionService } from './../../services/reserva-habitacion.service'
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../../services/persona.service';
import { ToastController } from '@ionic/angular';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  public ReservaForm: FormGroup;
  inputValue: string = "";
  public longitud: any;
  public disponibles = [];
  public personas = [];
  public resultadosArraytemp = [];
  public resultadosArraytempP= [];
  public jerarquia: any;
  public sexo: any;
  public correoEmail: any;
  public disp: boolean=false;
  
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();

  constructor(
    public reservaHabitacion: ReservaHabitacionService,    
    public personaService: PersonaService,     
    public habitacionService: HabitacionService,     
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone,
    private toastService: ToastService,
    private toastController: ToastController
    ) 

    {
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
  
    this.habitacionService.listarHabitacionesDisponibles()
    .subscribe(
    datos => {
        this.disponibles=datos
        this.longitud=this.disponibles.length
        this.resultadosArraytemp = this.disponibles
    });
  
    this.personaService.listarPersonas()
    .subscribe(
    datos => {
        this.personas=datos
        this.resultadosArraytempP = this.personas
    });
  
  }

  public verificaDisponibilidadPorJerarquia(): any{
    debugger
  
    this.resultadosArraytemp =this.disponibles;
    let valorJerarquia: any;
    let valorSexo: string;
    let valorDisponible: boolean=false;
  
    this.resultadosArraytemp.pop()

    const largoArray = this.resultadosArraytemp.length;

    valorJerarquia=this.jerarquia;

    valorSexo=this.sexo;

    if((valorJerarquia == "Supervisores")||(valorJerarquia == "Operadores")){
    
        var i = 0;
        while((i < largoArray)&&(!valorDisponible)){
                  if(this.resultadosArraytemp[i].hasOwnProperty("categoria")){
                      if(this.resultadosArraytemp[i].categoria == "Estandar"){ 
                          if(this.resultadosArraytemp[i].ocupante == "DESOCUPADA"){
                                valorDisponible=true;  
                                this.disp=valorDisponible; 
                          }else{
                                 if(this.resultadosArraytemp[i].ocupante == (valorSexo.toUpperCase())){
                                        valorDisponible=true;  
                                        this.disp=valorDisponible;  
                                 }    
                          }
                      }else{
                           if(this.resultadosArraytemp[i].categoria == "Simple"){   
                                 valorDisponible=true; 
                                 this.disp=valorDisponible;                    
                            }     
                      }
                   }
                   i = i+1;
       }
        
  }else{
        var i = 0;
        while((i < largoArray)&&(!valorDisponible)){
                 if(this.resultadosArraytemp[i].hasOwnProperty("categoria")){
                       if(this.resultadosArraytemp[i].categoria == "Ejecutivas"){
                           if(this.resultadosArraytemp[i].estado == "Disponible"){
                                 valorDisponible=true;  
                                 this.disp=valorDisponible; 
                            }      
                        }   
                  }
                  i = i+1;
        }
    
}
}

public verificaDisponibilidadPorEmail(correo :string): any{
    debugger
  
    let valorJ : any;
  
    let valorS : any;
  
    this.resultadosArraytempP =this.personas;
 
    var index:number = this.resultadosArraytempP.indexOf(this.resultadosArraytempP.find(x => x.email == correo));
  
    if(index!=-1){
           if(this.resultadosArraytempP[index].hasOwnProperty("email")){    
  
                if(this.resultadosArraytempP[index].email == correo){
  
                      valorJ=this.resultadosArraytempP[index].jerarquia;  
                      valorS=this.resultadosArraytempP[index].sexo;
   
                      this.jerarquia=valorJ;
   
                      this.sexo=valorS;
   
                }
            } 
    }
} 

  onSubmit() {
    debugger
  
  let valorJe: any;
  let valorSe: any;
  let valorDis: any;

  if(this.ReservaForm.valid){

        const largoArray=this.longitud;

        this.correoEmail=this.inputValue.toString();

        this.verificaDisponibilidadPorEmail(this.correoEmail);

        valorJe=this.jerarquia;
        
        valorSe=this.sexo;

           if((valorJe!=null)&&(valorSe!=null)){
            
                 this.verificaDisponibilidadPorJerarquia();

                 valorDis=this.disp;

                if(largoArray>1){
               
                     if(valorDis==true){
                             this.reservaHabitacion.addReserva(this.ReservaForm.value)
                            .subscribe(data => {
                            //  alert("EXITO "+data);
                            this.toastService.presentToast('Reserva guardada. Muchas Gracias');
                            this.ReservaForm.reset();
                            }, (err) => {
                            // alert("Fallo");
                            this.toastService.presentToast('Error, consulte con el administrador');
                            });     
                    }else{
                       this.showToastWithCloseButton();
                    }
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
    message: 'No hay Habitaciones Disponibles.',
    showCloseButton: true,
    closeButtonText: 'Ok'
  });
  toast.present();
}

}
