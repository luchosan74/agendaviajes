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
      zoom: 15,
      center: [-43.1920533,-22.9831944]
    });
    map.resize();
    document.getElementById('map').style.width = '150vw';
    document.getElementById('map').style.height = '80vh';
   document.getElementsByClassName('mapboxgl-canvas')[0].style.width = '180vw';
    document.getElementsByClassName('mapboxgl-canvas')[0].style.height = '100vh';
    document.getElementById('resizeMap');

    const layerList = document.getElementById('menu');
    layerList.style.width = '100vw';
    const inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
      var layerId = layer.target.id;
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }
    //
    map.on('load', function () {
      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              // feature for Mapbox SF
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-43.1920533,-22.9831944]
              },
              'properties': {
                'title': 'Hotel CopaSul ',
                'icon': 'harbor'
              }
            }
          ]
        }
      });
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    });
    //

  }








}
