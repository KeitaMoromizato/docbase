"use strict";

import assert from 'power-assert';
import DocbaseApi from '../../src/index.js';

describe('Docbase Team API', () => {

  const docbase = new DocbaseApi({
    version: 1
  });

  context('GET /team', () => {

    it('should return teams', done => {

      docbase.team.find().then(teams => {

        assert(teams.length > 0);

      }).then(done, done);
    });
  });
});
