import {Component, Input, OnInit} from '@angular/core';
import {IssueService} from '../../services/tracker/issue/issue.service';
import * as moment from 'moment';
import {AvatarService} from '../../services/custom/avatar-service/avatar.service';

@Component({
  selector: 'app-dashboard-tickets',
  templateUrl: './dashboard-tickets.component.html',
  styleUrls: ['./dashboard-tickets.component.scss']
})
export class DashboardTicketsComponent implements OnInit {
  public isTicketsLoading = false;
  public tickets: any;

  constructor(private _tickets: IssueService, private _avatar: AvatarService) {
  }

  ngOnInit(): void {
    this.fnGetTickets();

  }

  fnReturnAssigneeImg(obj) {
    return this._avatar.getInitials(obj.assignee);
  };

  // function to get label color for the Issues.
  fnGetIssuesLabelColor(labelObj) {
    if (labelObj.color) {
      const labelTextColor = this.fnInvertColor(labelObj.color);
      return {
        'background-color': labelObj.color,
        color: '' + labelTextColor
      };
    }
  };

  fnInvertColor(hex) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    // http://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  };


  fnGetTickets() {
    this.isTicketsLoading = true;
    this._tickets.getIssues().subscribe((response: any) => {
      this.tickets = response;
      console.log('resp', response);
      this.tickets.map((obj) => {
        if (obj.lastUpdated) {
          obj.humanDateCreated = moment.unix(obj.lastUpdated).format('MM/DD/YYYY HH:mm:ss');
          obj.updatedDate = moment(obj.humanDateCreated).fromNow();
        }
      });
      this.isTicketsLoading = false;
    }, err => {
      this.isTicketsLoading = false;
    });
  }

}
