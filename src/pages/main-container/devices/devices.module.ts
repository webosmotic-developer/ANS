import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: DevicesComponent}
];


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    DevicesComponent
  ]
})
export class DevicesModule { }
