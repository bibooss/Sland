
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyApp } from './app.component';

//import { HomePageModule } from '../pages/home/home.module';

//import{LoginPageModule} from '../pages/login/login.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


/// google api    AIzaSyDxErptbkfARWVEjC1jvqQSpclQ_eV0W5E