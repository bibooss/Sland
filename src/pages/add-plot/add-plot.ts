import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
name:'add-plot'
})

@Component({
  selector: 'page-add-plot',
  templateUrl: 'add-plot.html',
})
export class AddPlotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlotPage');
  }

}
