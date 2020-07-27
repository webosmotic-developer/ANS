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
        title: 'Devices',
        icon: 'device.svg'
      },
      {
        title: 'Tickets',
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
  }


  toggleSidebar() {
    if (this.isSidebarClose) {
      document.getElementById('mySidebar').style.width = '200px';
      document.getElementById('main').style.marginLeft = '200px';
      this.isSidebarClose = false;
    } else {
      document.getElementById('mySidebar').style.width = '85px';
      document.getElementById('main').style.marginLeft = '85px';
      this.isSidebarClose = true;
    }
  }

}
