import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.page.html',
  styleUrls: ['./new-perfil.page.scss'],
})
export class NewPerfilPage implements OnInit {
ProfileName:string='';
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) {

   }

  ngOnInit() {

  }

  Guardar(){
    console.log(this.ProfileName);
    if(this.ProfileName==''||this.ProfileName==undefined||this.ProfileName==' '){
      this.Loading.LoadingNormal('Campos Vacios',2);
    }else{
      let data={
        Option:"NewProfile",
        ProfileName:this.ProfileName
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
         if(data.message==1700){
          this.Loading.LoadingNormal('Este Nombre ya se encuentra asociado a un Perfil',2);
         }else{
           let id=JSON.parse(data.data)[0].Id_ProfileEvent+'.'+JSON.parse(data.data)[0].Name;
          this.navCtrl.navigateRoot('/perfil-events/'+id); 
         }
        }else{
          this.Loading.HideLoading();
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        }
    });
    }

    
  }
}
