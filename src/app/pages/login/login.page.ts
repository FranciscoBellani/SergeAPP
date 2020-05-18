import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { LoginService } from './../../services/login.service'
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public onLoginForm: FormGroup;
  public invalidLogin: boolean =false;
  public usuarioDosPuntosContrasena: String;
  public Auth64 : any;
  loading: boolean;
  errorMessage: string;
  public usuario: string = ''
  contrasena: any;
  URLservidor: String;
  public ServidorIP: String = 'http://localhost:8080';
  direccionURL: any;
  public invalidServidor: boolean =false;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'usuario': [null, Validators.compose([
        Validators.required
      ])],
      'contrasena': [null, Validators.compose([
        Validators.required
      ])]
    });
    this.verificaservidorok();
  }

  verificaservidorok(){
    
    if(!window.localStorage.URLservidor){
      this.URLservidor = this.ServidorIP;
      window.localStorage.URLservidor = this.ServidorIP;
    }else{      
      this.URLservidor = window.localStorage.URLservidor;
        }
    
    this.direccionURL = this.URLservidor;
    return fetch(this.direccionURL, {mode: "no-cors"})
    .then(res => {
      console.log('La URL "'+this.direccionURL+'" si existe.');
      this.invalidServidor = false;
      
    })
    .catch(err => {
      console.log('La URL "'+this.direccionURL+'" NO existe.');
      this.invalidServidor = true;
      this.elegirURLservidorPrompt(this.direccionURL);
    })

  }
  async elegirURLservidorPrompt(urlValue) {
    if(window.localStorage.URLservidor){
      urlValue = window.localStorage.URLservidor;
    }else if(!urlValue){
      urlValue = this.ServidorIP;
    }else{
      urlValue = urlValue;
    }
    const alert = await this.alertCtrl.create({
      header: 'Error de conexion',
      message:'Contactese con el administrador',      
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {            
          }
        }, 
      ]
    });
    await alert.present();
  }
 

  onSubmit(){
      if (this.onLoginForm.invalid){
      return;
    }
    this.usuario= this.onLoginForm.controls.usuario.value,
    this.contrasena= this.onLoginForm.controls.contrasena.value    
    this.loginService.realizaLogin(this.usuario, this.contrasena)
    .subscribe(
    (response) => {   

    if (response && response.length) {         
      this.navCtrl.navigateRoot('/home-results');
      this.GuardaUsuarioEnCookie(this.usuario);
      this.toastService.presentToast('Bienvenido: '+this.usuario);
    }
    },
    (error) => {
      console.log(error);    
    this.invalidLogin = true;
    this.toastService.presentToast('Usuario y/o contraseña incorrectos');
    this.onLoginForm.reset();
    })
  } 

  GuardaUsuarioEnCookie(usuarioRecibido: String){
    window.localStorage.usuario = usuarioRecibido;
  }
}
