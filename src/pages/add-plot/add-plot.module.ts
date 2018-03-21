import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlotPage } from './add-plot';

@NgModule({
  declarations: [
    AddPlotPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlotPage),
  ],
})
export class AddPlotPageModule {}
