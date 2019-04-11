import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { PostService } from '../post.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from '../pop/pop.component';
import { PopOverService } from '../pop-over.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
  
})
export class PruebaPage implements OnInit {

  constructor(   
    public global:GlobalService,
    public Post:PostService,
    public navCtrl:NavController,
    public Loading:LoadingService,
    public Alert:AlertService,
    public Aroute:ActivatedRoute,
    public POP:PopOverService
    ) { }

  ngOnInit() {

  }

  MostrarPag(){
    this.navCtrl.navigateRoot('/alerta');
  }

  Mostrar(){
    this.POP.presentPopover(PopComponent);
  }
}
