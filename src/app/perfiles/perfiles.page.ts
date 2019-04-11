import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {
Perfiles=new Array();
PerfilesOri=new Array();
searchQuery: string = '';
Items;
p: number = 1;
  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) { }

  ngOnInit() {
    let data={
      Option:"SelectProfile"
    };
    this.Post.Event(data,(err,data)=>{
      console.log(data) ;
      if(err==null){
        this.PerfilesOri=this.Perfiles=JSON.parse(data.data);
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
    this.Perfiles = this.Perfiles.filter((item) => {
      console.log(item)
      return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
initializeItems() {
  this.Perfiles=this.PerfilesOri;
}


DeleteProfile(Id){
  let data={
    Option:"DeleteProfile",
    Id_ProfileEvent:Id
  };
  this.Post.Event(data,(err,data)=>{
    console.log(data) ;
    if(err==null){
     this.ngOnInit();
    }else{
      this.Loading.HideLoading();
      this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
    }
});
}

NewPerfil(){
  this.navCtrl.navigateRoot('/new-perfil');
}
DataPerfil(i,name){
  let id=i+'.'+name+'.perfiles';
  this.navCtrl.navigateRoot('/vperfil-event/'+id); 
}

  doRefresh(event){
    setTimeout(() => {
      let data={
        Option:"SelectProfile"
      };
      this.Post.Event(data,(err,data)=>{
        console.log(data) ;
        if(err==null){
          this.PerfilesOri=this.Perfiles=JSON.parse(data.data);
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
}
