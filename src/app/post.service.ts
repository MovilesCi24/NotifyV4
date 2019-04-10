import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
Ruta;
ControllersAPI;
  constructor(
    public http: HttpClient,
    private storage: Storage,
    public global:GlobalService,
  ) {
    this.Refresh((datos)=>{
      console.log('Datos Actualizados')
    });
   }
   Login(data,callback){
     this.Refresh((datos)=>{
      this.http.post(this.ControllersAPI.Login,data).subscribe(res => {
        callback(null,res)
      },(err) => {
        callback(err)
      });
     })
  }

  Event(data,callback){
    this.Refresh((datos)=>{
     this.http.post(this.ControllersAPI.Events,data).subscribe(res => {
       callback(null,res)
     },(err) => {
       callback(err)
     });
    })
 }

  Refresh(cb){
    this.storage.get('Ruta').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.global.Servidor=val;
        this.ControllersAPI={
          Login:val+"/LoginController",
          Events:val+"/EventController",
        };
        cb(this.ControllersAPI);
      }
  });
}
}
