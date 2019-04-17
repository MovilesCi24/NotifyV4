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
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

}
