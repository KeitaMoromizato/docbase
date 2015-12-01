"use strict";

import Base from './base.js';

export default class Groups extends Base{

  find(domain) {
    return new Promise((resolve, reject) => {
      if (!domain) return reject(new Error(`Groups.find# domain not set`));

      this.get(this.getURL(domain)).then(resolve, reject);
    });
  }

  getURL(domain) {
    return `${this.BASE_URL}/teams/${domain}/groups`;
  }
}
