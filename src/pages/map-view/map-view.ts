import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage({
  name:'viewer'
  })


@Component({
  selector: 'page-map-view',
  templateUrl: 'map-view.html',
})


export class MapViewPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.loadMap();

    console.log('ionViewDidLoad MapViewPage');
  }


  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }




  addMarker(){


  }

}
