import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.verMapa();
  }

  verMapa() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsOTIiLCJhIjoiY2p1ZDlsbGlhMGNjazQ0cjF3NzVpcDU4aSJ9.YVYELRf7-qj3jI9_a8KFng';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [4.899, 52.372]
    });
    map.resize();
    document.getElementById('map').style.width = '100%';
    document.getElementById('map').style.height = '60vh';
    document.getElementsByClassName('mapboxgl-canvas')[0].style.width = '100%';
    document.getElementsByClassName('mapboxgl-canvas')[0].style.height = '60vh';
    document.getElementById('resizeMap');
    
    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');
    
    function switchLayer(layer) {
      var layerId = layer.target.id;
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }

  }
 
 
   
  
    
  

}
