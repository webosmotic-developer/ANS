import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Constant} from '../../constant/constant';
import {SecurityService} from '../../services/access/security/security.service';
import {UserService} from '../../services/access/user/user.service';
import {Router} from '@angular/router';
import {UniversalStorageService} from '../../services/custom/universal-storage-service/universal-storage.service';
import {ToastrService} from '../../services/custom/toastr-service/toastr.service';
import {AuthService} from '../../services/custom/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  form: FormGroup;
  isSecurityMode: boolean;
  isSessionFailed: boolean;
  isEmailInvalid: boolean;
  isLoading: boolean;
  accountType: string;
  payloadObj: any;
  fieldsArray: any = [];
  model: any = {};


  constructor(private _formBuilder: FormBuilder,
              private _security: SecurityService,
              private _auth: AuthService,
              private _user: UserService,
              private _toastr: ToastrService,
              private _router: Router, private _cookies: UniversalStorageService
  ) {
    this.isSecurityMode = false;
    this.isLoading = false;
    this.fieldsArray = [];
    this.isEmailInvalid = false;
    this.isSessionFailed = false;
  }

  ngOnInit(): void {
    this.fnCreateForm();
  }

  private fnCreateForm(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
    });
    this.form = this._formBuilder.group({});
  }

  fnNext(): void {
    this.isLoading = true;
    const email = this.loginForm.get('email').value;
    if (this.fnCheckIdentifier(email)) {
      this.payloadObj = {
        type: 'email',
        identifier: email
      };
      this.accountType = 'Email';
    } else {
      this.payloadObj = {
        type: 'username',
        identifier: email
      };
      this.accountType = 'user Name';
    }
    this._security.getAuthenticationParameters(this.payloadObj.type, this.payloadObj.identifier)
      .subscribe((res: any) => {
        res.fields.forEach((fieldObj) => {
          fieldObj.templateOptions.placeholder = fieldObj.templateOptions.label;
          fieldObj.templateOptions.label = '';
          fieldObj.templateOptions.description = '';
        });
    this.isLoading = false;
    this.isSecurityMode = true;
      this.fieldsArray = res.fields;
    }, (err) => {
      if (err && err.status === 401) {
        this.isEmailInvalid = true;
      }
      this.isLoading = false;
    });
  }

  fnSignIn(model): void {
    this.isLoading = true;
    this.isSessionFailed = false;
    this.payloadObj.body = model;
    this._security.createSession(this.payloadObj.type, this.payloadObj.identifier, this.payloadObj.body)
      .subscribe((res: any) => {
        this._auth.fnSetToken(res.id);
        this._auth.fnGetAuthUser();
        this._router.navigate(['/dashboard']);
        this.isSessionFailed = false  ;
        this.isLoading = false;
      }, (err) => {
        if (err && err.error && err.error.message) {
          this._toastr.error(err.error.message);
        }
        this.isSessionFailed = true;
        this.isLoading = false;
      });
  }

  private fnCheckIdentifier(text): boolean {
    const regex = Constant.EMAIL_REG_EX;
    return regex.test(text);
  }

  fnBack(): void {
    this.isSecurityMode = false;
  }

}
