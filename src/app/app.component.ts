import { Component } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';
import { PopOverService } from './pop-over.service';
import { PopComponent } from './pop/pop.component';
import { PostService } from './post.service';
import { AlertService } from './alert.service';
import * as moment from 'moment';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages=new Array();
  query:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,    
    public navCtrl:NavController,
    private firebase: Firebase,
    public global:GlobalService,
    public POP:PopOverService,
    public Post:PostService,
    public toast: ToastController,
    public Alert:AlertService
  ) {
    this.initializeApp();
    this.pages=[
      {title:'Página Principal',ruta:'/home'},
      {title:'Perfiles de Notificación',ruta:'/perfiles'},
      {title:'Usuarios',ruta:'/usuarios'},
      {title:'Ajustes Visuales',ruta:'/ajustes-v'},
      {title:'Prueba',ruta:'/prueba'}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('434549');
      this.firebase.getToken()
      .then(token =>{ 
        console.log(`The token is ${token}`);
        this.global.UserToken=token;
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
      this.firebase.onNotificationOpen()
      .subscribe(data =>{
        if(this.global.IsLoggin==true){
          console.log('User opened a notification' +JSON.stringify(data));
          console.log(data)
          if(data.alerta==true||data.alerta=="true"){
            this.global.AlertaData=data;
            if(this.global.AlertaData.url=="null"||this.global.AlertaData.url==null){
              this.POP.presentPopover(PopComponent);
            }else{
              this.navCtrl.navigateForward('/alerta');
            }
          }else{
            this.global.AlertaData=data;
            this.CraerToast(data.title+': '+data.label);
          }
        }

      } );
    });
  }

  OpenPage(ruta){
    this.navCtrl.navigateRoot(ruta);
  }

  CerrarSesion(){
    this.navCtrl.navigateRoot('/login');
  }
 
 async CraerToast(mess){
   let bandera=1;
  const toasty = await this.toast.create({
    message: mess,
    showCloseButton: true,
    position: 'top',
    closeButtonText: 'Ver',
    translucent:true,
    color:'blanco',
    cssClass:'Notify',
    duration:4000
  });
  toasty.present();
  setTimeout(()=>{
    bandera=0;
  },3800);
  toasty.onDidDismiss().then(()=>{
    if(bandera==1){
      let data={
        Option:'ReadNoty',
        Id_Unique:this.global.AlertaData.Id_Unique,
        Id_User:this.global.UserData.Id_User,
        ReadDate:moment().format("YYYY-MM-DD HH:mm:ss")
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
          console.log('Notificacion Leida')
        }else{
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        }
    });
    }else{
      console.log('Dismissed toast Auto');
    }

  })
 }
  

}
