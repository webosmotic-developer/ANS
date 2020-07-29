import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';

const routes = [
  {path: '', component: DashboardComponent}
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomMapModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
