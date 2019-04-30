import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-ver-noty',
  templateUrl: './ver-noty.page.html',
  styleUrls: ['./ver-noty.page.scss'],
})
export class VerNotyPage implements OnInit {
Data=new Array();
Id_unique;
Notificacion:any;
Imagenes=new Array();
Bimagen=false;
Binput=false;
Blabel=false;
Botones=new Array();;
Campos;
Texto;
Response:string;
Dispositivo:string="N/A";
Usuario:string="N/A";
Fecha:string;
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public Aroute:ActivatedRoute
  ) {
    let Data1=this.Aroute.snapshot.paramMap.get('Id');
    this.Data=Data1.split('*');
    console.log(this.Data);
    this.Id_unique=this.Data[0];
    console.log(this.Id_unique);
   }

  ngOnInit() {
    let data={
      Option:'EventDetail',
      Id_User:this.global.UserData.Id_User,
      Id_Unique:this.Id_unique,
      ReadDate:moment().format("YYYY-MM-DD HH:mm:ss")
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Notificacion=JSON.parse(data.data)[0];
        console.log(this.Notificacion);
        this.Response=this.Notificacion.Answer;
        this.Dispositivo=this.Notificacion.UID;
        this.Usuario=this.Notificacion.Usuario;
        this.Fecha=moment(this.Notificacion.EventDate).format("HH:mm:ss YYYY-MM-DD");
        console.log('Respuesta:',this.Response);
        if(this.Notificacion.Url=="null"||this.Notificacion.Url==null){
          this.Bimagen=false;
        }else{
          this.Bimagen=true;
        }
        console.log(this.Notificacion.Url);
        this.Imagenes=JSON.parse(this.Notificacion.Url.replace(/'/g,'"'))
        console.log(this.Imagenes);
        //this.Botones=.split(';');
        console.log(this.Bimagen);
        console.log('Input',this.Notificacion.Input);
        if(this.Notificacion.Input=="true"||this.Notificacion.Input==true||this.Notificacion.Input=="True"){
          this.Binput=true;
        }else{
          this.Binput=false;
        }
        console.log(this.Binput);
        if(this.Notificacion.Label=="null"||this.Notificacion.Label==null){
          this.Blabel=false;
        }else{
          this.Blabel=true;
          this.Texto=this.Notificacion.Label;
        }
        console.log(this.Blabel,this.Texto);
        let predata=this.Notificacion.Button.replace(/'/g,'"');
        console.log(predata)
        this.Botones=JSON.parse(predata)
        console.log(this.Botones);

      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

}
