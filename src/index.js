'use strict';

import team from './teams.js';
import tag from './tags.js';
import group from './groups.js';
import post from './posts.js';

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
