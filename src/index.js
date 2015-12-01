'use strict';

import team from './teams/index.js';

export default function(options = {}) {

  const version = options.version || 1;
  const token = options.token || process.env.DOCBASE_API_TOKEN;

  if(!token) {
    throw new Error(`API token is not set.`);
  }

  this.team = new team(token, version);
}
