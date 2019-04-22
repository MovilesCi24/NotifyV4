import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NotifyService } from '../notify.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ajustes-v',
  templateUrl: './ajustes-v.page.html',
  styleUrls: ['./ajustes-v.page.scss'],
})
export class AjustesVPage implements OnInit {
Item;
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
    this.Item=this.global.Item;
   }

  ngOnInit() {
  }

  ActItems(){
    this.global.Item=this.Item;
    this.storage.set('ITEM',this.Item);
    }

}
