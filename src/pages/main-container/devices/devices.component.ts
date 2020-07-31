import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  public devices: any = [{
    id: 'f7897938-3b62070a-5a40e8cb',
    phase: 'PRODUCTION',
    connection: 'CONNECTED',
    typeId: 'a87f29eb',
    gatewayId: 'f7897938-3b62070a',
    oem: 'ADRF',
    model: 'PSR-78-9537',
    version: '2.0',
    mode: 'DUPLEX',
    name: 'The Pinnacle',
    description: '414 15th St - SD Pilot',
    health: 200,
    location: '32.70968576971332,-117.15084314346315',
    clusterIds: [
      'f7897938-17d0f4ea',
      'f7897938-a7684716'
    ],
    data: {
      photo: [
        '/buildings/Pinnacle - SD.jpg'
      ],
      address: [
        '424 15th St, San Diego, CA 92101'
      ],
      lat: [
        '32.709638'
      ],
      long: [
        '-117.150784'
      ],
      email: [
        'amehta@airtower.com'
      ],
      donorSite: [
        'City Admin Building'
      ]
    },
    gateway: {
      id: 'f7897938-3b62070a',
      phase: 'PRODUCTION',
      connection: 'CONNECTED',
      category: 'GATEWAY',
      typeId: '07831673',
      oem: 'Predictive Technologies',
      model: 'X', version: '2.0',
      serial: '431e0fa5-822b-4000-9629-d5f02c275af7',
      name: 'The Pinnacle',
      description: 'SD Pilot - Gateway X',
      health: 200,
    },
    properties: {
      https: false,
      port: 80,
      vaultId: 'f7897938-d47b9011',
      ip: '192.168.0.3'
    },
    defaultHealth: 200
  }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
