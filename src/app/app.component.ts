import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
  ) {
    this.initializeApp();
    this.pages=[
      {title:'Página Principal',ruta:'/home'},
      {title:'Perfiles de Notificación',ruta:'/perfiles'},
      {title:'Usuarios',ruta:'/usuarios'},
      {title:'Ajustes Visuales',ruta:'/ajustes-v'}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  OpenPage(ruta){
    this.navCtrl.navigateRoot(ruta);
  }

  CerrarSesion(){
    this.navCtrl.navigateRoot('/login');
  }
}
