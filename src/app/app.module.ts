import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FingerprintAIO,
    SocialSharing,
    SMS,
    HttpClient,
    HttpClientModule,
    ImagePicker,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
