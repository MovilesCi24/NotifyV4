import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  Usuarios=new Array();
  UsuariosOri=new Array();
  searchQuery: string = '';
  Items;
  p: number = 1;
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) { 
    this.Items=this.global.Item;
  }

  ngOnInit() {
    let data={
      Option:"SelectUser"
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.UsuariosOri=this.Usuarios=JSON.parse(data.data);
      }else{
        this.Loading.HideLoading();
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  getItems(ev: any) {
    this.initializeItems()
    // set val to the value of the searchbar
    const val = ev.target.value;
  
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Usuarios = this.Usuarios.filter((item) => {
        console.log(item)
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  initializeItems() {
    this.Usuarios=this.UsuariosOri;
  }

  doRefresh(event){
    setTimeout(() => {
      let data={
        Option:"SelectUser"
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
          this.Usuarios=this.Usuarios=JSON.parse(data.data);
          console.log('Async operation has ended');
          event.target.complete();
          event
        }else{
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
          console.log('Async operation has ended');
          event.target.complete();
        }
    });
    }, 1000);
  }

  VerData(Id_User,UserName){
    let id=Id_User+'.'+UserName;
    this.navCtrl.navigateRoot('/user-perfil/'+id); 
  }

  Inactive(id){
    let data={
      Option:"InactiveUser",
      Id_User:id
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.ngOnInit();
        event
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }

  Active(id){
    let data={
      Option:"ActiveUser",
      Id_User:id
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.ngOnInit();
        event
      }else{
        this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
      }
  });
  }
}
