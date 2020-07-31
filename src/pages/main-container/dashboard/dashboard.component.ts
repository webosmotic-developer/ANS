import {Component, OnInit} from '@angular/core';
import {AlarmsService} from '../../../services/node/alarms/alarms.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public isAlarmsLoading = false;
  public alarms: any;

  constructor(private _alarms: AlarmsService) {
  }


  ngOnInit(): void {
    this.fnGetAlarms();

  }

  fnGetAlarms() {
    this.isAlarmsLoading = true;
    this._alarms.getAlarms().subscribe((response: any) => {
      if (response && response.alarms)
      this.alarms = response.alarms;
      this.isAlarmsLoading = false;
    }, err => {
      this.isAlarmsLoading = false;
    });
  }

}
