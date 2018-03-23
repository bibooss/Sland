import { Geolocation } from '@ionic-native/geolocation';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlotPage } from './add-plot';

@NgModule({
  declarations: [
    AddPlotPage,
  ],
  providers:[
    Geolocation
  ]
  ,
  imports: [
    IonicPageModule.forChild(AddPlotPage),
  ],
})
export class AddPlotPageModule {}
