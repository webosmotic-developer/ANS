import {Component, OnInit} from '@angular/core';
import {AlarmsService} from '../../../services/node/alarms/alarms.service';
import * as _ from 'lodash';
import {DeviceService} from '../../../services/node/device/device.service';
import {HealthService} from '../../../services/node/health/health.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public isAlarmsLoading = false;
  public isDevicesLoading = false;
  public alarms: any;
  public healths: any;
  public devices: any;
  public alarmsPieChartData = [];
  public devicePieChartData = [];

  constructor(private _alarms: AlarmsService,
              private _device: DeviceService,
              private _health: HealthService) {
  }


   ngOnInit() {
    this.fnGetAlarms();
    this.fnGetHealths();

  }

  fnGetAlarms() {
    this.isAlarmsLoading = true;
    this._alarms.getAlarms().subscribe((response: any) => {
      if (response && response.alarms)
        this.alarms = response.alarms;
      this.fnCreateAlarmsPieChartData();
      this.isAlarmsLoading = false;
    }, err => {
      this.isAlarmsLoading = false;
    });
  }

  fnGetHealths() {
    this.isDevicesLoading = true;
    this._health.getHealths().subscribe((healths: any) => {
      this.healths = healths;
      this.fnGetDevices();
    });
  }

  fnGetDevices() {
    this._device.getDevices().subscribe((response: any) => {
      this.devices = response;
      this.fnCreateHealthPieChartData();
    }, err => {
      this.isDevicesLoading = false;
    });
  }

  fnGetSliceName(key) {
    const health = _.find(this.healths, (h: any) => {
      return h.code == key;
    });
    if (health) {
      return health.name;
    }
  }

  fnGetSliceColor(key) {
    const health = _.find(this.healths, (h: any) => {
      return h.code == key;
    });
    if (health) {
      return health.color;
    }
  }

  fnCreateHealthPieChartData() {
    this.devicePieChartData = [];
    const tempDeviceData = _.groupBy(this.devices, 'health');
    _.forEach(tempDeviceData, (objData, key) => {
      this.devicePieChartData.push({
        deviceQuantity: objData.length,
        y: objData.length,
        name: this.fnGetSliceName(key),
        color: this.fnGetSliceColor(key)
      });
    });
    this.isDevicesLoading = false;
  }


  fnCreateAlarmsPieChartData() {
    this.alarmsPieChartData = [];
    const tempDeviceData = _.groupBy(this.alarms, 'deviceName');
    _.forEach(tempDeviceData, (objData, key) => {
      this.alarmsPieChartData.push({
        alarmQuantity: objData.length,
        y: objData.length,
        name: key,
      });
    });
  }
}
