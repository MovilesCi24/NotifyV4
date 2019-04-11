import { Component } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages=new Array();
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,    
    public navCtrl:NavController,
    private firebase: Firebase,
    public global:GlobalService
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
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
      this.firebase.onNotificationOpen()
      .subscribe(data =>{
        console.log('User opened a notification' +JSON.stringify(data));
        console.log(data)
        if(data.alerta==true||data.alerta=="true"){
          this.global.AlertaData=data;
          this.navCtrl.navigateForward('/alerta');
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
}
