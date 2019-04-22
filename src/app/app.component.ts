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
import { Storage } from '@ionic/storage';
import { NotifyService } from './notify.service';
import { Vibration } from '@ionic-native/vibration/ngx';
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
    private storage: Storage,
    public global:GlobalService,
    public POP:PopOverService,
    public Post:PostService,
    public toast: ToastController,
    public Alert:AlertService,
    public Noty:NotifyService,
    private vibration: Vibration
  ) {
    this.initializeApp();
    this.pages=[
      {title:'Página Principal',ruta:'/home'},
      {title:'Perfiles de Notificación',ruta:'/perfiles'},
      {title:'Usuarios',ruta:'/usuarios'},
      {title:'Ajustes Visuales',ruta:'/ajustes-v'},
      //{title:'Prueba',ruta:'/prueba'}
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
          this.Actualizar();
          console.log('User opened a notification' +JSON.stringify(data));
          console.log(data);
          if(data.alerta==true||data.alerta=="true"){
            this.global.AlertaData=data;
            if(this.global.AlertaData.url=="null"||this.global.AlertaData.url==null){
              this.POP.presentPopover(PopComponent);
            }else{
              this.navCtrl.navigateForward('/alerta');
            }
          }else{
            this.global.AlertaData=data;
            this.CraerToast();
          }
        }else{
          console.log('User Is Logged out')
        }

      } );
    });
  }

  OpenPage(ruta){
    this.navCtrl.navigateRoot(ruta);
  }

  CerrarSesion(){
    this.storage.set('Logged',false);
    this.Noty.InsertClave(this.global.UserData.Id_User,this.global.UserData.Id_Company,this.global.UserData.Id_Role,this.global.UserToken,0,(err,data1)=>{
      if(err==null){
        console.log('Todo Bien')
      }else{
        console.log("ERR   =>   "+err)
      }
    });
    this.navCtrl.navigateRoot('/login');
  }
 
 async CraerToast(){
   let bandera=1;
  const toasty = await this.toast.create({
    message: this.global.AlertaData.label,
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
  this.vibration.vibrate([300,400,300]);
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
    console.log()
    let lid=this.global.AlertaData.Id_Unique+'*'+this.global.AlertaData.Label;
    this.navCtrl.navigateRoot('/ver-noty/'+lid); 

    }else{
      console.log('Dismissed toast Auto');
    }

  })
 }
  
Actualizar(){
  let data1={
    Option:'SelectNoty',
    Id_User:this.global.UserData.Id_User
  };
  this.Post.Event(data1,(err,data)=>{
    console.log(data) ;
    if(err==null){
      this.global.Historial=JSON.parse(data.data);
      for(let i=0;i<this.global.Historial.length;i++){
        this.global.Historial[i].EventDate=moment(this.global.Historial[i].EventDate).fromNow();
      }
    }else{
      this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
    }
});
}
}
