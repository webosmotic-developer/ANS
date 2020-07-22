import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotAuthGuardService} from '../services/custom/not-auth-guard-service/not-auth-guard.service';
import {AuthGuardService} from '../services/custom/auth-guard-service/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule),
    canActivate: [NotAuthGuardService]},
  {path: '', loadChildren: () => import('../pages/main-container/main-container.module').then(m => m.MainContainerModule),
    canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
