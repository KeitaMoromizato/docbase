"use strict";

import Base from './base.js';

export default class Posts extends Base {

  create(domain, params) {
    return new Promise((resolve, reject) => {
      if (!domain) return reject(new Error(`Posts.create# domain not set`));

      this.post(this.getURL(domain), params).then(post => {
        resolve(post);
      }).catch(error => {
        reject(error);
      });
    });
  }

  search(domain, params = {}) {
    return new Promise((resolve, reject) => {
      if (!domain) return reject(new Error(`Posts.search# domain not set`));

      const hasOptions = Object.keys(params).length;

      const q = hasOptions ?
        `?q=${params.q || ''}` + Object.keys(params).filter(key => key !== 'q').reduce((memo, key) => `${memo}${key}:${encodeURIComponent(params[key])} `, '')
        : '';

      this.get(this.getURL(domain) + q).then(posts => {
        resolve(posts);
      }).catch(error => {
        reject(error);
      });
    });
  }

  find(domain, id) {
    return new Promise((resolve, reject) => {
      if (!domain) return reject(new Error(`Posts.find# domain not set`));

      this.get(`${this.getURL(domain)}/${id}`).then(post => {
        resolve(post);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getURL(domain) {
    return `${this.BASE_URL}/teams/${domain}/posts`;
  }
}
