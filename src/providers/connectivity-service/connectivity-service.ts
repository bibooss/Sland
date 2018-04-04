import { Platform } from 'ionic-angular';

import { Injectable } from '@angular/core';
//import { Network } from '@ionic-native/network';

import { HttpClient } from '@angular/common/http';
import {Network} from '@ionic-native/network'
import 'rxjs/observable'
import 'rxjs/operator/map'



/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectivityServiceProvider {

  onDevice:boolean= false;

  constructor(public http: HttpClient, public net: Network, public platform: Platform) {


this.onDevice= this.platform.is('cordova');

  }




checkOnline() {

  if(this.onDevice)
  {

 this.net.onConnect().subscribe(()=>{

    return true

    alert('network connected!');


 });

  }

  else {

console.log("not a cordova device")

return navigator.onLine;

  }

}

checkOffline(){

  if(this.onDevice)
  {

 this.net.onDisconnect().subscribe(()=>{

    return true

    alert('network connected!');


 });

  }

  else {

console.log("not a cordova device")

return !navigator.onLine;


  }


}




}
