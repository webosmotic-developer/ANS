import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlarmsPieChartComponent} from './alarms-pie-chart.component';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from '../loader/loader.module';

@NgModule({
  declarations: [AlarmsPieChartComponent],
  imports: [
    CommonModule,
    LoaderModule,
    NgbAccordionModule
  ],
  exports: [AlarmsPieChartComponent]
})
export class AlarmsPieChartModule {
}
