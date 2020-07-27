import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../../services/custom/sidenav-service/sidenav.service';
import {AuthService} from '../../services/custom/auth-service/auth.service';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss']
})
export class MobileSidebarComponent implements OnInit {
  menuItems = [];
  isSideMenuOpen : boolean;
  loggedInUser: any;
  private _subscription;

  constructor(public _sideNav: SidenavService,
              private _auth: AuthService,) {
  }

  ngOnInit() {
    this._auth.loggedInUser.subscribe((user) => {
      if (user) {
        this.loggedInUser = user;
      }
    });
    this.menuItems = [
      {
        title: 'Devices',
        icon: 'device.svg'
      },
      {
        title: 'Ticket Management',
        icon: 'ticket.svg'
      },
      {
        title: 'Alarms',
        icon: 'alarms.svg'
      },
      {
        title: 'Reports',
        icon: 'chart.svg'
      },

    ]

    this._subscription = this._sideNav.sidenav$.subscribe(value => {
      this.isSideMenuOpen = value
    });

  }



}
