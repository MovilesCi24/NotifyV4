import { Component, OnInit } from '@angular/core';
import { PopOverService } from '../pop-over.service';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  Imagenes=new Array();
  Bimagen=false;
  Binput=false;
  Blabel=false;
  Botones=new Array();;
  Campos;
  Texto;
  Response:string;
  constructor(public POP:PopOverService,
    public global:GlobalService,
    public Post:PostService,
    public Loading:LoadingService,
    public Alert:AlertService,) { }

    ngOnInit() {
      setTimeout(()=>{
        this.POP.Dismiss();
      },this.global.AlertaData.Validity);
      if(this.global.AlertaData.url=="null"||this.global.AlertaData.url==null){
        this.Bimagen=false;
      }else{
        this.Bimagen=true;
      }
      console.log(this.global.AlertaData.url);
      this.Imagenes=JSON.parse(this.global.AlertaData.url.replace(/'/g,'"'))
      console.log(this.Imagenes);
      //this.Botones=.split(';');
      console.log(this.Bimagen);
      if(this.global.AlertaData.input=="true"||this.global.AlertaData.url==true){
        this.Binput=true;
      }else{
        this.Binput=false;
      }
      console.log(this.Binput);
      if(this.global.AlertaData.label=="null"||this.global.AlertaData.url==null){
        this.Blabel=false;
      }else{
        this.Blabel=true;
        this.Texto=this.global.AlertaData.label;
      }
      console.log(this.Blabel,this.Texto);
      let predata=this.global.AlertaData.button.replace(/'/g,'"');
      console.log(predata)
      this.Botones=JSON.parse(predata)
      console.log(this.Botones);
    }
  
  Cancel(){
    this.POP.Dismiss();
  }

  Responder(Mensaje?){
    if(Mensaje==undefined||Mensaje==null){
      
    }else{
      let data1={
        Option:"AlertResponse",
        Id_User:this.global.UserData.Id_User,
        Id_Unique:this.global.AlertaData.Id_Unique,
        Answer:Mensaje
      };
      this.Post.Event(data1,(err,data)=>{
        //console.log(data) ;
        if(err==null){
        //  console.log('Respuesta enviada');
        }else{
          this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
        }
    });
    }
}
}
