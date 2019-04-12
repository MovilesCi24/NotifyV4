import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NotifyService } from '../notify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
User:string;
Pass:string;
  constructor(
    public global:GlobalService,
    public Post:PostService,
    private storage: Storage,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public splashScreen:SplashScreen,
    public Noty:NotifyService
  ) { 
    this.storage.get('Usuario').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.User=val;
      }
      console.log('User',val)
    });
    this.storage.get('Contraseña').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.Pass=val;
      }
      console.log('Pass',val)
    });
  }

  ngOnInit() {
    this.Loading.HideLoading();
    this.splashScreen.hide();
  }

  public Login(){
    if(this.global.Servidor==''||this.global.Servidor==' '||this.global.Servidor==null||this.global.Servidor==undefined){
      this.Loading.LoadingNormal("Dirigase al Boton de Ajustes para configurar la Url del servidor",4);
    }else{
      if(this.Pass!="" && this.User!=""){
        this.Loading.LoadingNormal("Autenticando",10);
        let data={
            idConnection: 1,
            userName: this.User,
            password:this.Pass
          };
          this.Post.Login(data,(err,data)=>{
            console.log(data) ;
            if(err==null){
              if(data.status==1){
                if(data.message==this.global.RestDefinitions.Success){
                  this.global.User=this.User;
                  this.global.Pass=this.Pass;
                  this.storage.set('Usuario',this.User);
                  this.storage.set('Contraseña',this.Pass);
                  this.Loading.LoadingNormal("Autenticacion Exitosa",2);
                  this.global.IsLoggin=true;
                  this.global.UserData=JSON.parse(data.data)[0];
                  console.log(this.global.UserData);
                  this.Noty.InsertClave(this.global.UserData.Id_User,this.global.UserData.Id_Company,this.global.UserData.Id_Role,this.global.UserToken,(err,data1)=>{
                    if(err==null){
                      console.log('Todo Bien')
                    }else{
                      console.log("ERR   =>   "+err)
                    }
                  });
                  this.navCtrl.navigateRoot('/home');
                }else{
                  this.Loading.LoadingNormal("Error en la Autenticacion",2)
                }
              }else{
                if(data.message==900){
                  this.Loading.LoadingNormal("Contraseña Incorrecta",2)
                  console.error('Contraseña Incorrecta');
                }else if(data.message==700){
                  this.Loading.LoadingNormal("Usuario No Existe",2)
                  console.error('Usuario No Existe');
                }else{
                  this.Loading.LoadingNormal("Error de Conexion",2)
                }
              }
            }else{
              this.Loading.HideLoading();
              this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
            }
          })
       }else{
        this.Loading.LoadingNormal("Error se encuentran campos vacios",2);
      }
    }
}

  public Settings(){
    this.navCtrl.navigateRoot('/settings');
  }

}