import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {InterceptorService} from '../services/custom/interceptor-service/interceptor.service';
import {StartupService} from '../services/custom/startup-service/startup.service';
import {UniversalStorageService} from '../services/custom/universal-storage-service/universal-storage.service';
import {AuthGuardService} from '../services/custom/auth-guard-service/auth-guard.service';
import {NotAuthGuardService} from '../services/custom/not-auth-guard-service/not-auth-guard.service';


export function init(startup: StartupService): Function {
  return (): Promise<any> => startup.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: APP_INITIALIZER, useFactory: init, multi: true, deps: [StartupService]},
    UniversalStorageService,
    AuthGuardService,
    NotAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
