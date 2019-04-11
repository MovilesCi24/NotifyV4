import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asociate-events',
  templateUrl: './asociate-events.page.html',
  styleUrls: ['./asociate-events.page.scss'],
})
export class AsociateEventsPage implements OnInit {
  Data;
  Id_User;
  Perfiles;
  Posicion=new Array();
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public Aroute:ActivatedRoute
  ) { 
    let Data1=this.Aroute.snapshot.paramMap.get('Id');
    this.Data=Data1.split('.');
    console.log(this.Data);
    this.Id_User=this.Data[0];
    console.log(this.Id_User)
  }

  ngOnInit() {
    let data={
      Option:"ProfileEmpty",
      Id_User:this.Id_User,
      Empty:this.Data[2]
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Perfiles=JSON.parse(data.data);
        this.Posicion=new Array(this.Perfiles.length);
        for(let i=0;i<this.Perfiles.lentgh;i++){
          this.Posicion[i]=false;
        }
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  Asociar(){
    console.log(this.Posicion);
    let cuenta=0;
    for(let i=0;i<this.Posicion.length;i++){
      if(this.Posicion[i]==true){
        cuenta=cuenta+1;
      }
    }
    setTimeout(()=>{
      if(cuenta==0){
        this.Loading.LoadingNormal('Seleccione al menos un Perfil',2);
      }else{
        this.Loading.LoadingNormal('Asociando Perfiles...',2);
        for(let i=0;i<this.Posicion.length;i++){
          if(this.Posicion[i]==true){
            let data={
              Option:"SaveProfile",
              Id_User:this.Id_User,
              Id_ProfileEvent:this.Perfiles[i].Id_ProfileEvent
            };
            this.Post.Event(data,(err,data)=>{
              console.log(data) ;
              if(err==null){
                console.log('Perfil Asociado correctamente');
              }else{
                this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
              }
          });
          }
        }
        setTimeout(()=>{
          this.navCtrl.navigateRoot('/user-perfil/'+this.Data[0]+'.'+this.Data[1]);
        },1000);
      }
    },1000);
    }
  }

