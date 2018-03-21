import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MatCardModule
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule {




}
