import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
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
p: number = 1;
Item;
searchQuery: string = '';
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
Notificaciones=new Array();
NotificacionesOri=new Array();
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public splashScreen:SplashScreen,
  ) {
    this.Item=this.global.Item;
  }

  ngOnInit() {
    let data={
      Option:'SelectNoty',
      Id_User:this.global.UserData.Id_User
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.splashScreen.hide();
        this.NotificacionesOri=this.global.Historial=JSON.parse(data.data);
        for(let i=0;i<this.global.Historial.length;i++){
          this.NotificacionesOri[i].EventDate=this.global.Historial[i].EventDate=moment(this.global.Historial[i].EventDate).fromNow();
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
          this.NotificacionesOri=this.global.Historial=JSON.parse(data.data);
          for(let i=0;i<this.global.Historial.length;i++){
            this.NotificacionesOri[i].EventDate=this.global.Historial[i].EventDate=moment(this.global.Historial[i].EventDate).fromNow();
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

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.Notificaciones.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }



  VerNotificacion(id,titulo){
    console.log(titulo)
    let lid=id+'*'+titulo;
    this.navCtrl.navigateRoot('/ver-noty/'+lid); 
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
        this.NotificacionesOri=this.global.Historial=JSON.parse(data.data);
        for(let i=0;i<this.global.Historial.length;i++){
          this.NotificacionesOri[i].EventDate=this.global.Historial[i].EventDate=moment(this.global.Historial[i].EventDate).fromNow();
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
        this.NotificacionesOri=this.global.Historial=JSON.parse(data.data);
        for(let i=0;i<this.global.Historial.length;i++){
          this.NotificacionesOri[i].EventDate=this.global.Historial[i].EventDate=moment(this.global.Historial[i].EventDate).fromNow();
        }
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        console.log('Async operation has ended');
      }
  });
    
  }


  
getItems(ev: any) {
  this.initializeItems()
  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.global.Historial = this.global.Historial.filter((item) => {
      console.log(item)
      return (item.Label.toLowerCase().indexOf(val.toLowerCase()) > -1||item.Titulo.toLowerCase().indexOf(val.toLowerCase()) > -1||item.Usuario.toLowerCase().indexOf(val.toLowerCase()) > -1||item.UID.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
initializeItems() {
  this.global.Historial=this.NotificacionesOri;
}

}
