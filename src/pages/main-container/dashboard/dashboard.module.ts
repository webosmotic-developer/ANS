import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {DashboardActiveAlarmsModule} from '../../../shared/dashboard-active-alarms/dashboard-active-alarms.module';
import {DashboardTicketsModule} from '../../../shared/dashboard-tickets/dashboard-tickets.module';
import {AlarmsPieChartComponent} from '../../../shared/alarms-pie-chart/alarms-pie-chart.component';
import {AlarmsPieChartModule} from '../../../shared/alarms-pie-chart/alarms-pie-chart.module';
import {DeviceHealthPieChartModule} from '../../../shared/device-health-pie-chart/device-health-pie-chart.module';

const routes = [
  {path: '', component: DashboardComponent}
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomMapModule,
    DashboardActiveAlarmsModule,
    AlarmsPieChartModule,
    DashboardTicketsModule,
    DeviceHealthPieChartModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
