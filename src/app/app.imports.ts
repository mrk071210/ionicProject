
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



export const MODULES = [
  BrowserModule,
  HttpClientModule,
];

export const PROVIDERS = [
    StatusBar,
    SplashScreen

];

export const DIRECTIVES = [

];
