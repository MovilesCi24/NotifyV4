import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PopComponent } from './pop/pop.component';
import { Firebase } from '@ionic-native/firebase/ngx';  
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  declarations: [AppComponent,PopComponent],
  entryComponents: [PopComponent],
  imports: [
    BrowserModule, NgxPaginationModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],exports:[PopComponent]
})
export class AppModule {}
