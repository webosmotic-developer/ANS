import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {AngularSvgIconModule} from 'angular-svg-icon';

const routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  declarations: [MainContainerComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSvgIconModule,

  ],
})
export class MainContainerModule {
}
