import {
    Component,
    OnInit
} from '@angular/core';
import * as L from 'leaflet';
import {latLng, tileLayer} from 'leaflet';


@Component({
    selector: 'app-custom-map',
    templateUrl: './custom-map.component.html',
    styleUrls: ['./custom-map.component.scss']
})
export class CustomMapComponent implements OnInit {
  map: L.Map;
  options: any;

  ngOnInit() {
    this.fnCreateMap()
  }

  mapReady(map: L.Map) {
    this.map = map;
    }

  fnCreateMap() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 12,
      center: latLng(38.9072, -77.0369)
    };


  }



}
