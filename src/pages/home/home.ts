import { ConnectivityServiceProvider } from './../../providers/connectivity-service/connectivity-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
name:'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


export class HomePage {

locations:any;

location = [
  {name:"kiambu",
lat:-25.363,log:131.044,
size:"15 acars",
center:40
},
{name:"nairobi",
lat:42.8788,log:-1.54265,
size:"15 acars",
center:35

},
{name:"lodwar",
lat:-25.363,log:131.044,
size:"15 acars",
center:45,
zoom:10

},
{name:"kamba",
lat:10.789,log:-2.87,
size:"15 acars",
center:20

}
];

course:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private conn: ConnectivityServiceProvider) {


  }

ionViewDidLoad(){

console.log("home loaded")
this.conn.isOnline();

}


 showMap(co){

  console.log(co.name);

   this.navCtrl.push('viewer');

  }



}
