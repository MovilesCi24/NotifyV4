import { Component, OnInit } from '@angular/core';
import { PopOverService } from '../pop-over.service';
import { GlobalService } from '../global.service';

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
  constructor(public POP:PopOverService,
    public global:GlobalService) { }

    ngOnInit() {
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
}
