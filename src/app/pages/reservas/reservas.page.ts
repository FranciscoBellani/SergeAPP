import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Reserva } from './../../models/reserva';
import { ReservaHabitacionService } from './../../services/reserva-habitacion.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  public ReservaForm: FormGroup;

  // data: Reserva

  constructor(
    public reservaHabitacion: ReservaHabitacionService,    
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public router: Router,
    private zone: NgZone) 

    {
      this.ReservaForm = this.formBuilder.group
      ({
        fechaInicio: [''],
        fechaFin: [''],
        email: ['']
      })
    }
    // { 
    // this.data = new Reserva();
    // }



  ngOnInit() {    
  }

  onFormSubmit() {
    if (!this.ReservaForm.valid) {
      return false;
    } else {
      this.reservaHabitacion.addReserva(this.ReservaForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.ReservaForm.reset();
            // this.router.navigate(['/home-result']);
            
          })
        });
    }
  }


  // GuardarReserva() {
  //   this.reservaHabitacion.createItem(this.data).subscribe((response) => {
  //     this.router.navigate(['list']);
  //   });}
}
