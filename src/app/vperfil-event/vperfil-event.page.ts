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
  Datos;
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
    let data={
      Option:"EventProfile",
      Id_ProfileEvent:this.Id_Perfil
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.Datos=JSON.parse(data.data);
        this.OrganizarData(this.Datos);
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  OrganizarData(data){

  }
}
