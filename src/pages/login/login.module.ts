import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {SecurityService} from '../../services/access/security/security.service';
import {UserService} from '../../services/access/user/user.service';
import {LoaderModule} from '../../shared/loader/loader.module';

const routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormlyModule,
    LoaderModule
  ],
  providers: [SecurityService, UserService],
})
export class LoginModule { }
