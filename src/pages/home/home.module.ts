import { Network } from '@ionic-native/network';


import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {MatCardModule} from '@angular/material/card';
import { ConnectivityServiceProvider } from './../../providers/connectivity-service/connectivity-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MatCardModule,
    HttpClientModule
  ],
  entryComponents: [
    HomePage
  ],

  providers:[ ConnectivityServiceProvider, Network]
})
export class HomePageModule {




}
