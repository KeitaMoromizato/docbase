"use strict";

import Base from './base.js';

export default class Teams extends Base{

  find() {
    return new Promise((resolve, reject) => {
      this.get(this.getURL()).then(resolve, reject);
    });
  }

  getURL() {
    return `${this.BASE_URL}/teams`;
  }
}
