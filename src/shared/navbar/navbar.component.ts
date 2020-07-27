import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/custom/auth-service/auth.service';
import {Router} from '@angular/router';
import {SidenavService} from '../../services/custom/sidenav-service/sidenav.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedInUser: any;
  isSideMenuOpen : boolean
  private _subscription;

    constructor(private _auth: AuthService,
                private _router: Router,
                private _sidenav: SidenavService) {
    }

    ngOnInit() {
      this._auth.loggedInUser.subscribe((user) => {
        if (user) {
          this.loggedInUser = user;
        }
      });
      this._subscription = this._sidenav.sidenav$.subscribe(value => {
        this.isSideMenuOpen = value
      });
    }


  fnLogout() {
    this._auth.fnRemoveToken();
    this._router.navigate(['login']);
  }

  onToggle() {
      this._sidenav.open()
  }


}
