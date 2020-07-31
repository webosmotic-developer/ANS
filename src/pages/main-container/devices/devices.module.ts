import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import {RouterModule} from "@angular/router";
import {AngularSvgIconModule} from "angular-svg-icon";

const routes = [
  {path: '', component: DevicesComponent}
];


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSvgIconModule,
  ],
  exports:[
    DevicesComponent
  ]
})
export class DevicesModule { }
