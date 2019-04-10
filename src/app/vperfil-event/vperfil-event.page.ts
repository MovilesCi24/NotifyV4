import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vperfil-event',
  templateUrl: './vperfil-event.page.html',
  styleUrls: ['./vperfil-event.page.scss'],
})
export class VperfilEventPage implements OnInit {
  Data;
  Id_Perfil;
  Datos=new Array();
  Devices=new Array();
  Dispositivo=new Array();
  Componentes=new Array();
  Eventos=new Array();
  TDisp=new Array();
  Tcomp=new Array();
  Vevent=new Array();
  Enviado=new Array();
  Editar=true;
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
    this.Id_Perfil=this.Data[0];
    console.log(this.Id_Perfil)
  }

  ngOnInit() {
    let data1={
      Option:"GetDevices"
    };
    this.Post.Event(data1,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Devices=JSON.parse(data.data);
        this.OrganizarData(this.Devices);
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
    let data={
      Option:"EventProfile",
      Id_ProfileEvent:this.Id_Perfil
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Datos=JSON.parse(data.data);
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  OrganizarData(Disp){
    this.Dispositivo=new Array();
    let map = new Map();
    for (let item of Disp) {
        if(!map.has(item.Id_DeviceType)){
            map.set(item.Id_DeviceType, true);    // set any value to Map
            this.Dispositivo.push({
              Id_DeviceType: item.Id_DeviceType,
              NameDevices: item.NameDevices
            });
            this.TDisp.push(true);
        }
    }
    this.Componentes=new Array(this.Dispositivo.length);
    this.Tcomp=new Array(this.Dispositivo.length);
    for(let i=0;i<this.Dispositivo.length;i++){
      this.Componentes[i]=new Array();
      this.Tcomp[i]=new Array();
      let map2 = new Map();
      for (let item of Disp) {
        if((!map2.has(item.Id_Component))&&(item.Id_DeviceType==this.Dispositivo[i].Id_DeviceType)){
            map2.set(item.Id_Component, true);    // set any value to Map
            this.Componentes[i].push({
              Id_Component: item.Id_Component,
              NameComponent: item.NameComponent
            });
            this.Tcomp[i].push(true);
        }
    }
    }
    this.Eventos=new Array(this.Dispositivo.length);
    this.Vevent=new Array(this.Dispositivo.length);
    for(let i=0;i<this.Dispositivo.length;i++){
      this.Eventos[i]=new Array(this.Componentes[i].length);
      this.Vevent[i]=new Array(this.Componentes[i].length);
      for(let j=0;j<this.Componentes[i].length;j++){
        this.Eventos[i][j]=new Array();
        this.Vevent[i][j]=new Array();
        let map3 = new Map();
        for (let item of Disp) {
          if((!map3.has(item.Id_EventComponent))&&(item.Id_DeviceType==this.Dispositivo[i].Id_DeviceType)&&(item.Id_Component==this.Componentes[i][j].Id_Component)){
              map3.set(item.Id_EventComponent, true);    // set any value to Map
              this.Eventos[i][j].push({
                Id_DeviceType: item.Id_DeviceType,
                NameDevices: item.NameDevices,
                Id_Component: item.Id_Component,
                NameComponent: item.NameComponent,
                Id_EventComponent: item.Id_EventComponent,
                NameEvent: item.NameEvent,
                Id_DeviceComponent: item.Id_DeviceComponent
              });
              this.Vevent[i][j].push(false);
          }
      }
    }
  }
  console.log(this.Eventos);
  setTimeout(()=>{
    this.VerificarExis();
  },1000);
}

VerificarExis(){
  for(let o=0;o<this.Datos.length;o++){
    for(let i=0;i<this.Dispositivo.length;i++){
      for(let j=0;j<this.Componentes[i].length;j++){
        for(let k=0;k<this.Eventos[i][j].length;k++){
          if(this.Datos[o].Id_EventComponent==this.Eventos[i][j][k].Id_EventComponent){
            this.Vevent[i][j][k]=true;
          }
        }
      }
    }
  }
}

Atras(){
  this.navCtrl.navigateRoot('/perfiles'); 
}
EditarActive(){
  this.Editar=false;
}

ToggleD(i){
  if(this.TDisp[i]==false){
    this.TDisp[i]=true;
  }else if(this.TDisp[i]==true){
    this.TDisp[i]=false;
  }
}

ToggleC(i,j){
  if(this.Tcomp[i][j]==false){
    this.Tcomp[i][j]=true;
  }else if(this.Tcomp[i][j]==true){
    this.Tcomp[i][j]=false;
  }
}

    Guardar(){
      let data1={
        Option:"BlankProfile",
        Id_ProfileEvent:this.Id_Perfil
      };
      this.Post.Event(data1,(err,data)=>{
        console.log(data) ;
        if(err==null){
          this.Asociar();
        }else{
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        }
    });
    }


    Asociar(){
      this.Loading.LoadingNormal('Asociando Eventos...')
      console.log(this.Vevent);
      let v=0;
        for(let i=0;i<this.Dispositivo.length;i++){
          for(let j=0;j<this.Componentes[i].length;j++){
            for(let k=0;k<this.Eventos[i][j].length;k++){
              if(this.Vevent[i][j][k]==true){
                v=v+1;
                this.Enviado.push(false);
              }
            }
          }
        }
        if(v==0){
          this.Loading.HideLoading();
          this.Loading.LoadingNormal('Seleccione al menos un evento',2)
        }else{
          let p=0;
          for(let i=0;i<this.Dispositivo.length;i++){
            for(let j=0;j<this.Componentes[i].length;j++){
              for(let k=0;k<this.Eventos[i][j].length;k++){
                if(this.Vevent[i][j][k]==true){
                  let data={
                    Option:"AsociateEvent",
                    Id_ProfileEvent:this.Id_Perfil,
                    Id_DeviceComponent:this.Eventos[i][j][k].Id_DeviceComponent,
                    Id_DeviceType:this.Eventos[i][j][k].Id_DeviceType,
                    Id_EventComponent:this.Eventos[i][j][k].Id_EventComponent,
                  };
                  this.Post.Event(data,(err,data)=>{
                    console.log(data) ;
                    if(err==null){
                      this.Enviado[p]=true;
                    }else{
                      this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
                      // hi perry How R U ------ very good re todo nice---------------------
                    }
                });
                p=p+1;
                }
              }
            }
          }
          setTimeout(()=>{
            this.Loading.HideLoading();
            this.Editar=true;
            this.ngOnInit();
          },2000);
        }
      }






}
