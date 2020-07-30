import {Component, OnInit} from '@angular/core';
import {AlarmsService} from '../../services/node/alarms/alarms.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-dashboard-active-alarms',
  templateUrl: './dashboard-active-alarms.component.html',
  styleUrls: ['./dashboard-active-alarms.component.scss']
})
export class DashboardActiveAlarmsComponent implements OnInit {
  public isAlarmsLoading = false;
  public alarms: any;

  constructor(private _alarms: AlarmsService) {
  }

  ngOnInit(): void {
    this.isAlarmsLoading = true
    this._alarms.getAlarms().subscribe((response: any) => {
      if (response && response.alarms)
        this.isAlarmsLoading = false;
        this.alarms = response.alarms;
    }, err =>  {
      this.isAlarmsLoading = false;
    });
  }

}
