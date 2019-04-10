import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loader:any;
  timeOutInstance:any;
  constructor(public loading: LoadingController) { }


   async LoadingNormal(Message?,SecondsToDismiss?,callback?){
    this.HideLoading();
    let template=Message;
    if(Message===undefined){
      template="";
    }
    clearTimeout(this.timeOutInstance);
    this.loader =  await this.loading.create({
      spinner: 'lines',
      cssClass:"background: transparent",
      message: template,
    });
    this.loader.present().then(() => {
      if(SecondsToDismiss===undefined){
      }else{
       setTimeout( ()=> {
          this.HideLoading();
          if(callback!==undefined){
            callback();
          }
        },SecondsToDismiss*1000)
      }
    });
  }

  HideLoading(SecondsToDismiss?,callback?){
    if(SecondsToDismiss===undefined){
      if(this.loader!==undefined){
        try{
          this.loader.dismiss();
          this.loader=undefined;
        }catch(e){
          console.log('err ',e);
        }
      }
    }else{
      this.timeOutInstance= setTimeout( ()=> {
        if(callback!==undefined){
          callback();
        }
        if(this.loader!==undefined){
          try{
            this.loader.dismiss();
            this.loader=undefined;
          }catch(e){
            console.log('err 1',e);
          }
        }
      },SecondsToDismiss*1000)
    }
  }

}
