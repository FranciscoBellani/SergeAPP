import { Component, OnInit } from '@angular/core';
import { NavController,AlertController  } from '@ionic/angular';
import { HabitacionService } from './../../services/habitacion.service'
import { debug } from 'util';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.page.html',
  styleUrls: ['./habitaciones.page.scss'],
})
export class HabitacionesPage implements OnInit {
  
  Reservas: any = [];

  constructor(public navCtrl: NavController, private habitacionService: HabitacionService,private toastService: ToastService, private alertCtrl: AlertController) { }
  public arrayHabitaciones : any = null;
  public resultadosArraytemp : any;
  public resultadosArrayFiltrado = [];

  ngOnInit() 
  {    
    this.listarTodasLasHabitaciones();
  }
  
  async cancelarReserva(id:String) 
  {
    const alert = await this.alertCtrl.create({
      header: 'Cancelar Reserva',
      message: 'Cancelar reserva?',
      buttons: [
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            console.log('Se clikeo si cancelar');
            {
              if(this.habitacionService.cancelarReserva(id))
                  {
                    this.toastService.presentToast('Reserva Cancelada. Muchas Gracias');
                    this.Reservas.splice(id, 1);
                    console.log('Reserva Cancelada');
                   this.navCtrl.navigateForward('/habitaciones');
                   this.ngOnInit();
                  }
            }
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Se clickeo no cancelar');
          }
        }
      ]
    });
    await alert.present();
    }


  // cancelarReserva(id:String) {
  //   if (window.confirm('¿Cancelar esta reserva?')) 
  //   {
  //     debugger
  //     if(this.habitacionService.cancelarReserva(id))
  //     {
  //       this.toastService.presentToast('Reserva Cancelada. Muchas Gracias');
  //       this.Reservas.splice(id, 1);
  //       console.log('Reserva Cancelada');
  //       this.navCtrl.navigateForward('/habitaciones');
  //     }
  //     else{
  //       this.toastService.presentToast('Error, consulte con el administrador');
  //     }
  //   }
  // }

  listarTodasLasHabitaciones() {
    this.arrayHabitaciones = [];
    this.resultadosArrayFiltrado = [];
    this.habitacionService.listarHabitaciones()
    .subscribe(
      contenidoObtenido => {
        this.arrayHabitaciones = contenidoObtenido;
        this.resultadosArraytemp = this.arrayHabitaciones;
        this.resultadosArraytemp.pop()
      
        const largoArray = this.resultadosArraytemp.length;
        for (var i = 0; i < largoArray;) 
         {                 
            this.resultadosArrayFiltrado.push(this.arrayHabitaciones[i]);         
             i = i+1;
        }        
        this.resultadosArrayFiltrado.sort(( a, b ) => parseInt(a.$$instanceId, 10) - parseInt(b.$$instanceId, 10) )        
        this.arrayHabitaciones = this.resultadosArrayFiltrado;        
    });
  } 
}
