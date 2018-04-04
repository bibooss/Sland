import { Network } from '@ionic-native/network';


import { NgModule } from '@angular/core';
import { IonicPageModule, Platform } from 'ionic-angular';
import { HomePage } from './home';
import {MatCardModule} from '@angular/material/card';
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

  providers:[ Network, Platform]
})
export class HomePageModule {




}
