import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {DashboardActiveAlarmsModule} from '../../../shared/dashboard-active-alarms/dashboard-active-alarms.module';



const routes = [
  {path: '', component: DashboardComponent}
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomMapModule,
    DashboardActiveAlarmsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
