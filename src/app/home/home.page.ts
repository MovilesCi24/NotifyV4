import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import * as moment from 'moment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
Notificaciones=new Array();
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public splashScreen:SplashScreen,
  ) {}

  ngOnInit() {
    let data={
      Option:'SelectNoty',
      Id_User:this.global.UserData.Id_User
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.splashScreen.hide();
        this.Notificaciones=JSON.parse(data.data);
        for(let i=0;i<this.Notificaciones.length;i++){
          this.Notificaciones[i].EventDate=moment(this.Notificaciones[i].EventDate).fromNow();
        }
      }else{
        this.splashScreen.hide();
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  doRefresh(event){
    setTimeout(() => {
      let data={
        Option:'SelectNoty',
        Id_User:this.global.UserData.Id_User
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
          this.Notificaciones=JSON.parse(data.data);
          for(let i=0;i<this.Notificaciones.length;i++){
            this.Notificaciones[i].EventDate=moment(this.Notificaciones[i].EventDate).fromNow();
          }
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


  Mleido(i,unique){
    let data={
      Option:'EventLeido',
      Id_User:this.global.UserData.Id_User,
      Id_Unique: unique,
      Leido:i
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Notificaciones=JSON.parse(data.data);
        for(let i=0;i<this.Notificaciones.length;i++){
          this.Notificaciones[i].EventDate=moment(this.Notificaciones[i].EventDate).fromNow();
        }
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        console.log('Async operation has ended');
      }
  });
    
  }

  Archivar(i,unique){
    let data={
      Option:'EventArchivar',
      Id_User:this.global.UserData.Id_User,
      Id_Unique: unique,
      Leido:i
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Notificaciones=JSON.parse(data.data);
        for(let i=0;i<this.Notificaciones.length;i++){
          this.Notificaciones[i].EventDate=moment(this.Notificaciones[i].EventDate).fromNow();
        }
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        console.log('Async operation has ended');
      }
  });
    
  }

}
