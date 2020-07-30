import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardActiveAlarmsComponent } from './dashboard-active-alarms.component';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from '../loader/loader.module';

@NgModule({
  declarations: [DashboardActiveAlarmsComponent],
  imports: [
    CommonModule,
    NgbAccordionModule,
    LoaderModule
  ],
  exports: [DashboardActiveAlarmsComponent]
})
export class DashboardActiveAlarmsModule { }
