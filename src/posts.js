"use strict";

import Base from './base.js';

export default class Posts extends Base{

  create(domain, params) {
    return new Promise((resolve, reject) => {
      if (!domain) return reject(new Error(`Posts.create# domain not set`));

      this.post(this.getURL(domain), params).then(post => {
        resolve(post)
      }).catch(error => {
        reject(error);
      });
    });
  }

  getURL(domain) {
    return `${this.BASE_URL}/teams/${domain}/posts`;
  }
}
