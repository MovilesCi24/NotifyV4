import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
query:any;
  constructor(
    public http: HttpClient,
    private storage: Storage,
    public global:GlobalService,
    public Post:PostService
  ) {
    this.Refresh((data)=>{
      console.log('Url Notificaciones actualizada',data);
    })
   }

   Refresh(cb){
    this.storage.get('Notificaciones').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.global.Noti=val;
        cb(this.global.Noti);
      }
  });
}


SendNotification(data,callback){
  this.Refresh((datos)=>{
   this.http.post(this.global.Noti,data).subscribe(res => {
     callback(null,res)
   },(err) => {
     callback(err)
   });
  })
}



public InsertClave(Id_User,Id_Company,Id_Role,Clave,Logged,cb:Function){
  console.log('InsertClave')
  this.query="SELECT [Id_User] FROM [Tb_Notifications] where Id_User='"+Id_User+"'"
  console.log(this.query) 
   this.Post.Prueba(this.query,(err,data)=>{
    if(err==null){
      if(JSON.parse(data.data).length==0){
        console.log("Usuario No registrado")
        let query2="INSERT INTO [Tb_Notifications] ([Id_User],[Id_Role],[ClaveU],[Id_Company],[Islogged]) VALUES ('"+Id_User+"','"+Id_Role+"','"+Clave+"','"+Id_Company+"',"+Logged+")"
        console.log(query2)
        this.Post.Prueba(query2,(err,data2)=>{
          if(err==null){
            cb(null,JSON.parse(data2.data))
          }else{
            console.log(err.message)
            cb(err)
          }
      })
      }else{
        console.log("Datos:",JSON.stringify(data.data))
        let query2="UPDATE [Tb_Notifications] SET [Islogged] = "+Logged+",[Id_Role] = '"+Id_Role+"' ,[ClaveU] = '"+Clave+"',[Id_Company] = '"+Id_Company+"' WHERE Id_User='"+Id_User+"'"
        console.log(query2)
        this.Post.Prueba(query2,(err,data2)=>{
          if(err==null){
            cb(null,JSON.parse(data2.data))
          }else{
            console.log(err.message)
            cb(err)
          }
      })
      }
    }else{
      console.log(err)
      cb(err)
    }
  })
}


}
