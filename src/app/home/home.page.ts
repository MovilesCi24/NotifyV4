import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService
  ) {}

  ngOnInit() {
    this.Loading.HideLoading();
  }

}
