import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AuthGuardService} from '../../services/custom/auth-guard-service/auth-guard.service';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MobileSidebarComponent} from '../../shared/mobile-sidebar/mobile-sidebar.component';
import {SidenavService} from '../../services/custom/sidenav-service/sidenav.service';

const routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'devices',
        loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule),
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  declarations: [MainContainerComponent, NavbarComponent, SidebarComponent, MobileSidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSvgIconModule,

  ],
  providers: [AuthGuardService, SidenavService]
})
export class MainContainerModule {
}
