import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { GlobalService } from '../global.service';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  Imagenes=new Array();
  Bimagen=false;
  Binput=false;
  Blabel=false;
  Botones=new Array();;
  Campos;
  Texto;
  constructor(
    public global:GlobalService,
    public splashScreen:SplashScreen,
    public viewCtrl:ModalController,
    public navCtrl:NavController,
  ) {
    this.splashScreen.hide();

   }

  ngOnInit() {
    if(this.global.AlertaData.url=="null"||this.global.AlertaData.url==null){
      this.Bimagen=false;
    }else{
      this.Bimagen=true;
    }
    console.log(this.global.AlertaData.url);
    this.Imagenes=JSON.parse(this.global.AlertaData.url.replace(/'/g,'"'))
    console.log(this.Imagenes);
    //this.Botones=.split(';');
    console.log(this.Bimagen);
    if(this.global.AlertaData.input=="true"||this.global.AlertaData.url==true){
      this.Binput=true;
    }else{
      this.Binput=false;
    }
    console.log(this.Binput);
    if(this.global.AlertaData.label=="null"||this.global.AlertaData.url==null){
      this.Blabel=false;
    }else{
      this.Blabel=true;
      this.Texto=this.global.AlertaData.label;
    }
    console.log(this.Blabel,this.Texto);
    let predata=this.global.AlertaData.button.replace(/'/g,'"');
    console.log(predata)
    this.Botones=JSON.parse(predata)
    console.log(this.Botones);
  }


  Cancel(){
    this.navCtrl.pop();
  }
}
