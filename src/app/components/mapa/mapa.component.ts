import { Component, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', {static: true}) mapa;

  constructor() { }

  ngOnInit() {
    console.log(this.coords);
    
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JhcXVpdG8iLCJhIjoiY2tmdmMwZGRzMTE3djJxbHIxNXJnemxzcSJ9.r8GPt-ibojy4QnpT7ck2-g';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
                               .setLngLat([lng, lat])
                               .addTo(map);
                               

  } 

}
