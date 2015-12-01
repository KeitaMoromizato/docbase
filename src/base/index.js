"use strict";

import request from 'request';

export default class Base {

  constructor(token, version) {
    this.BASE_URL = 'https://api.docbase.io';

    this.token = token;
    this.version = version;
  }

  get(url) {
    return new Promise((resolve, reject) => {
      request.get({
        url: url,
        headers: {
          'X-DocBaseToken': this.token,
          'X-Api-Version': this.version
        },
        json: true
      }, (error, response, body) => {
        if (error || response.statusCode !== 200) return reject(error || body);

        resolve(body);
      });
    });
  }

  post(url, options) {
    return new Promise((resolve, reject) => {
      request.post({
        url: url,
        headers: {
          'X-DocBaseToken': this.token,
          'X-Api-Version': this.version
        },
        body: options,
        json: true
      }, (error, response, body) => {
        // TODO 201 is only POST /post ??
        if (error || response.statusCode !== 201) return reject(error || body);

        resolve(body);
      });
    });
  }
}