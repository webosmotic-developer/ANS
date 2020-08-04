import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from '../loader/loader.module';
import {DashboardTicketsComponent} from './dashboard-tickets.component';

@NgModule({
  declarations: [DashboardTicketsComponent],
  imports: [
    CommonModule,
    NgbAccordionModule,
    LoaderModule
  ],
  exports: [DashboardTicketsComponent]
})
export class DashboardTicketsModule { }
