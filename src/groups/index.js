"use strict";

import Base from '../base/index.js';

export default class Groups extends Base{

  find(options) {
    return new Promise((resolve, reject) => {
      if (!options.domain) return reject(new Error(`Groups.find# domain not set`));

      this.requestWithToken(this.getURL(options.domain), 'GET').then(resolve, reject);
    });
  }

  getURL(domain) {
    return `${this.BASE_URL}/teams/${domain}/groups`;
  }
}
