import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { GlobalService } from '../global.service';
import { ModalController, NavController } from '@ionic/angular';
import { PostService } from '../post.service';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

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
  Response:string;
  constructor(
    public global:GlobalService,
    public splashScreen:SplashScreen,
    public viewCtrl:ModalController,
    public navCtrl:NavController,
    public Post:PostService,
    public Loading:LoadingService,
    public Alert:AlertService,
  ) {
    this.splashScreen.hide();
   }

  ngOnInit() {
    setTimeout(()=>{
      this.navCtrl.pop();
    },this.global.AlertaData.Validity);
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
    if(this.global.AlertaData.input=="true"||this.global.AlertaData.input==true){
      this.Binput=true;
    }else{
      this.Binput=false;
    }
    console.log(this.Binput);
    if(this.global.AlertaData.label=="null"||this.global.AlertaData.label==null){
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

  Responder(Mensaje?){

      if(Mensaje==undefined||Mensaje==null){
        if(this.Response==''||this.Response==' '||this.Response==null||this.Response==undefined){
          this.Loading.LoadingNormal('La respuesta no puede estar vacia');
        }else{
          let data1={
            Option:"AlertResponse",
            Id_User:this.global.UserData.Id_User,
            Id_Unique:this.global.AlertaData.Id_Unique,
            Answer:this.Response
          };
          this.Post.Event(data1,(err,data)=>{
            console.log(data) ;
            if(err==null){
            console.log('Respuesta enviada');
            this.navCtrl.pop();
            }else{
              this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
            }
        });
        }
      }else{
        let data1={
          Option:"AlertResponse",
          Id_User:this.global.UserData.Id_User,
          Id_Unique:this.global.AlertaData.Id_Unique,
          Answer:Mensaje
        };
        this.Post.Event(data1,(err,data)=>{
          console.log(data) ;
          if(err==null){
          console.log('Respuesta enviada');
          this.navCtrl.pop();
          }else{
            this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
          }
      });
      }
  }
}
