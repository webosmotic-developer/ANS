import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from '../loader/loader.module';
import {DeviceHealthPieChartComponent} from './device-health-pie-chart.component';

@NgModule({
  declarations: [DeviceHealthPieChartComponent],
  imports: [
    CommonModule,
    LoaderModule,
    NgbAccordionModule
  ],
  exports: [DeviceHealthPieChartComponent]
})
export class DeviceHealthPieChartModule {
}
