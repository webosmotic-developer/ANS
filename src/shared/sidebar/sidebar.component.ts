import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarClose = true;
  menuItems = [];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'dashboard.svg',
        path: '/dashboard'
      },
      {
        title: 'Devices',
        icon: 'device.svg',
        path: '/devices'
      },
      {
        title: 'Ticket Management',
        icon: 'ticket.svg',
        path: ''
      },
      {
        title: 'Alarms',
        icon: 'alarms.svg',
        path: ''
      },
      {
        title: 'Reports',
        icon: 'chart.svg',
        path: ''
      },

    ]
  }


  toggleSidebar() {
    if (this.isSidebarClose) {
      document.getElementById('mySidebar').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.isSidebarClose = false;
    } else {
      document.getElementById('mySidebar').style.width = '72px';
      document.getElementById('main').style.marginLeft = '72px';
      this.isSidebarClose = true;
    }
  }

}
