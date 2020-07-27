import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  fnGetTextAvatar(userObj) {
    console.log("userObj", userObj)
    let initials = '';
    let tempArr = [];

    if (userObj.firstName && userObj.lastName) {
      tempArr = _.cloneDeep(userObj.firstName + ' ' + userObj.lastName).split(' ');
      if (tempArr.length > 1) {
        initials = tempArr[0].charAt(0).toUpperCase() + tempArr[1].charAt(0).toUpperCase();
      } else {
        initials = tempArr[0].charAt(0).toUpperCase()
      }
    } else if (userObj.username) {
      tempArr = _.cloneDeep(userObj.username).split(' ');
      if (tempArr.length > 1) {
        initials = tempArr[0].charAt(0).toUpperCase() + tempArr[1].charAt(0).toUpperCase();
      } else {
        initials = tempArr[0].charAt(0).toUpperCase();
      }
    } else if (userObj.alias) {
      tempArr = _.cloneDeep(userObj.alias).split(' ');
      if (tempArr.length > 1) {
        initials = tempArr[0].charAt(0).toUpperCase() + tempArr[1].charAt(0).toUpperCase();
      } else {
        initials = tempArr[0].charAt(0).toUpperCase();
      }
    } else {
      tempArr = _.cloneDeep(userObj.email).split('@');
      initials = tempArr[0].charAt(0).toUpperCase() + tempArr[1].charAt(0).toUpperCase();
    }
    return initials

  }

  //Generate color from string hashcode
  hashCode(str) { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB(i) {
    let c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }

  getInitials(userObj) {
    const randomColor = '#' + this.intToRGB(this.hashCode(userObj.name ?
      userObj.name : userObj.username ? userObj.username : userObj.alias ? userObj.alias : userObj.email));


    // get Luminance for hex color (Luminance is thus an indicator of how bright the surface will appear)
    const c = randomColor.substring(1);      // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >> 8) & 0xff;  // extract green
    const b = (rgb >> 0) & 0xff;  // extract blue
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    // if background light then set true(for set text color bas on luma)
    if (luma > 150) {
      userObj.isLight = true;
    }
    // Create a rectangular canvas which will become th image.
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 100;
    canvas.height = 100;
    // Draw the circle in the background using the randomColor.
    context.fillStyle = randomColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = (canvas.height / 3) + "px serif";
    // Make the text's center overlap the image's center.
    context.textAlign = "center";
    context.font = '36pt "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
    if (context.measureText(this.fnGetTextAvatar(userObj)).width > canvas.width - 15) {
      context.font = '30pt "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
    }
    context.fillStyle = userObj.isLight ? "#000000" : "#ffffff";
    context.fillText(this.fnGetTextAvatar(userObj), canvas.width / 2, canvas.height / 1.5);

    // Show the image to the world.
    return canvas.toDataURL(); //return base64 image string
  };


}
