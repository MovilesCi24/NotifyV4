import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import * as moment from 'moment';
@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {
  Notificaciones=new Array();
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) { }

  ngOnInit() {
    this.Loading.HideLoading();
    let data={
      Option:'SelectArchive',
      Id_User:this.global.UserData.Id_User
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
      }
  });
  }

  doRefresh(event){
    setTimeout(() => {
      let data={
        Option:'SelectArchive',
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

  Archivar(i,unique){
    let data={
      Option:'EventDesArchivar',
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
