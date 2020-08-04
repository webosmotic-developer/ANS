import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-active-alarms',
  templateUrl: './dashboard-active-alarms.component.html',
  styleUrls: ['./dashboard-active-alarms.component.scss']
})
export class DashboardActiveAlarmsComponent implements OnInit {
  @Input() data: any;
  @Input() isAlarmsLoading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
