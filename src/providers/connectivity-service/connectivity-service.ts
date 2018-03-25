
import { Injectable } from '@angular/core';
//import { Network } from '@ionic-native/network';

import { HttpClient } from '@angular/common/http';
import {Network} from '@ionic-native/network'



/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectivityServiceProvider {

  constructor(public http: HttpClient, public net: Network) {



  }



  //check if device has internet

isOnline(){

 // console.log('Hello ConnectivityServiceProvider Provider');

this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(


).subscribe(result => {
  console.log(result);
});



}



}
