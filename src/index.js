'use strict';

import team from './teams/index.js';
import tag from './tags/index.js';
import group from './groups/index.js';
import post from './posts/index.js';

export default function(options = {}) {

  const version = options.version || 1;
  const token = options.token || process.env.DOCBASE_API_TOKEN;

  if(!token) {
    throw new Error(`API token is not set.`);
  }

  this.team = new team(token, version);
  this.tag = new tag(token, version);
  this.group = new group(token, version);
  this.post = new post(token, version);
}
