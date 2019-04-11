import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {
  Data;
  Id_User;
  Perfiles;
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
    this.Id_User=this.Data[0];
    console.log(this.Id_User)
  }

  EditarActive(){
    this.Editar=false;
    this.ngOnInit();
  }
  GuardarActive(){
    this.Editar=true;
    this.ngOnInit();
  }

  ngOnInit() {
    let data={
      Option:"UserProfile",
      Id_User:this.Id_User
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Perfiles=JSON.parse(data.data);
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }


  doRefresh(event){
    setTimeout(() => {
      let data={
        Option:"UserProfile",
        Id_User:this.Id_User
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
          this.Perfiles=JSON.parse(data.data);
          console.log('Async operation has ended');
          event.target.complete();
        }else{
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
          console.log('Async operation has ended');
          event.target.complete();
        }
    });
    }, 1000);
  }

  DataPerfil(i,name){
    let id=i+'.'+name+'.user-perfil.'+this.Id_User+'.'+this.Data[1];
    this.navCtrl.navigateRoot('/vperfil-event/'+id); 
  }

  Inactive(id){
    let data={
      Option:"InactiveProfile",
      Id_User:this.Id_User,
      Id_ProfileEvent:id
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.ngOnInit();
        event
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  Active(id){
    let data={
      Option:"ActiveProfile",
      Id_User:this.Id_User,
      Id_ProfileEvent:id
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.ngOnInit();
        event
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  Delete(id){
    let data={
      Option:"DesasociateProfile",
      Id_User:this.Id_User,
      Id_ProfileEvent:id
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.ngOnInit();
        event
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }


  Asociar(){
    let per='0';
    for(let i=0;i<this.Perfiles.length;i++){
      per=per+','+this.Perfiles[i].Id_ProfileEvent;
    }
    console.log(per);
    setTimeout(()=>{
      let id=this.Id_User+'.'+this.Data[1]+'.'+per;
      this.navCtrl.navigateRoot('/asociate-events/'+id); 
    },1000);
  }
}
