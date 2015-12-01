"use strict";

import request from 'request';

export default class Base {

  constructor(token, version) {
    this.BASE_URL = 'https://api.docbase.io';

    this.token = token;
    this.version = version;
  }

  requestWithToken(url, method, params = {}) {
    return new Promise((resolve, reject) => {
      request({
        url: url,
        method: method,
        headers: {
          'X-DocBaseToken': this.token,
          'X-Api-Version': this.version
        }
      }, (error, response, body) => {
        if (error || response.statusCode !== 200) return reject(error || body);
        console.log(body);
        resolve(body);
      });
    });
  }
}
