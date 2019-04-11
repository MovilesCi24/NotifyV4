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
    //this.Botones=.split(';');
    let predata=this.global.AlertaData.button.replace(/'/g,'"');
    console.log(predata)
    this.Botones=JSON.parse(predata)
    console.log(this.Botones);
  }

}
