import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
Servidor:any;
  constructor(
    public global:GlobalService,
    public Post:PostService,
    private storage: Storage,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) { }

  ngOnInit() {
    this.storage.get('Ruta').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.Servidor=this.global.Servidor=val;
      }
  });
  }
  Guardar(){
    if(this.Servidor==''||this.Servidor==' '||this.Servidor==null||this.Servidor==undefined){
      this.Loading.LoadingNormal("Error, se encuentran campos vacios",2);
  }else{
    this.Loading.LoadingNormal("Guardando Cambios",3);
    this.storage.set('Ruta',this.Servidor);
    this.global.Servidor=this.Servidor;
    this.Post.Refresh((data)=>{
      this.navCtrl.navigateRoot('/login');
    })
  }
  }

}
