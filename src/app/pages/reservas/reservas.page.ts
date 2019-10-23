import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  public onRegisterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
