"use strict";

import Base from '../base/index.js';

export default class Teams extends Base{

  find() {
    return new Promise((resolve, reject) => {
      this.requestWithToken(this.getURL(), 'GET').then(resolve, reject);
    });
  }

  getURL() {
    return `${this.BASE_URL}/teams`;
  }
}
