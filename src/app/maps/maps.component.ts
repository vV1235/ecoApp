import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

  options: google.maps.MapOptions = {
    fullscreenControl: false,
    disableDoubleClickZoom: true,
    zoomControl: false
  }

  zoom = 13;
  markers = [] as any;

  constructor() { }

  ngOnInit(): void {
    this.center = {
      lat: 53.43, lng: 14.55
    }

    for(let i = 0; i < 10; i++) {
      this.addMarker()
      this.addMarker()
      this.addMarker()
      this.addMarker()
      this.addMarker()
    }
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 50,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 50,
      },
      label: {
        color: 'White',
        text: 'Eko punkt ' + (this.markers.length + 1),
      },
      title: 'Eko punkt ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }


}
