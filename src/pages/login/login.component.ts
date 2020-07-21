import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Constant} from '../../constant/constant';

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

  // public userGroups: any = [];
  // public loggedInUserGroup: Subject<any> = new BehaviorSubject<any>(null);
  // public userGroup: any;
  // public isAssigned: boolean;

  constructor(private _formBuilder: FormBuilder,
              // private _security: SecurityService,
              // private _auth: AuthService,
              // private _user: UserService,
              // private _toastr: ToastrService,
              // private _router: Router, private _cookies: UniversalStorageService
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
    // this._security.getAuthenticationParameters(this.payloadObj.type, this.payloadObj.identifier)
    //   .subscribe((res: any) => {
    //     res.fields.forEach((fieldObj) => {
    //       fieldObj.templateOptions.placeholder = fieldObj.templateOptions.label;
    //       fieldObj.templateOptions.label = '';
    //       fieldObj.templateOptions.description = '';
    //     });
    this.isLoading = false;
    this.isSecurityMode = true;
    //   this.fieldsArray = res.fields;
    // }, (err) => {
    //   if (err && err.status === 401) {
    //     this.isEmailInvalid = true;
    //   }
    //   this.isLoading = false;
    // });
  }

  fnSignIn(model): void {
    this.isLoading = true;
    this.isSessionFailed = false;
    this.payloadObj.body = model;
    // this._security.createSession(this.payloadObj.type, this.payloadObj.identifier, this.payloadObj.body)
    //   .subscribe((res: any) => {
    //     this._auth.fnSetToken(res.id);
    //     this._auth.fnGetAuthUser();
    //     this._auth.fnGetDeviceTypes();
    //     const userId = this._cookies.getItem('xContextId');
    //     this._user.getUserGroups(userId).subscribe((groups) => {
    //       this.userGroups = groups;
    //       if (this.userGroups.some(group => group.name === 'Administrators')) {
    //         this.userGroup = 'Administrators';
    //         this.isAssigned = true;
    //       }
    //       if (this.userGroups.some(group => group.name === 'Power User') && !this.isAssigned) {
    //         this.userGroup = 'Power User';
    //         this.isAssigned = true;
    //       }
    //       if (this.userGroups.some(group => group.name === 'Sales') && !this.isAssigned) {
    //         this.userGroup = 'Sales';
    //         this.isAssigned = true;
    //       }
    //       if (this.userGroups.some(group => group.name === 'Employees') && !this.isAssigned) {
    //         this.userGroup = 'Employees';
    //         this.isAssigned = true;
    //       }
    //       if (!this.isAssigned) {
    //         this.userGroup = 'Employees';
    //
    //       }
    //       localStorage.setItem('loggedInUserGroup', this.userGroup);
    //       if (this.userGroup === 'Administrators' || this.userGroup === 'Sales') {
    //         this._router.navigate(['/admin-dashboard']);
    //       } else {
    //         this._router.navigate(['/map']);
    //       }
    //       this.isLoading = false;
    //     });
    //   }, (err) => {
    //     if (err && err.error && err.error.message) {
    //       this._toastr.error(err.error.message);
    //     }
    this.isSessionFailed = true;
    this.isLoading = false;
    // });
  }

  private fnCheckIdentifier(text): boolean {
    const regex = Constant.EMAIL_REG_EX;
    return regex.test(text);
  }

  fnBack(): void {
    this.isSecurityMode = false;
  }

}
