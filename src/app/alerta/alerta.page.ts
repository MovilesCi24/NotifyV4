import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  Imagenes;
  Bimagen;
  Botones;
  Campos;
  Texto;
  constructor(
    public global:GlobalService,
    public splashScreen:SplashScreen
  ) {
    this.splashScreen.hide();

   }

  ngOnInit() {
    if(this.global.AlertaData.button.replace=="null"||this.global.AlertaData.button.replace==null){
      this.Bimagen=false;
    }else{
      this.Bimagen=true;
    }
    //this.Botones=.split(';');
    console.log(this.Bimagen);
    let predata=this.global.AlertaData.button.replace(/'/g,'"');
    console.log(predata)
    this.Botones=JSON.parse(predata)
    console.log(this.Botones);
  }

}
