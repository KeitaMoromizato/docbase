"use strict";

import assert from 'power-assert';
import DocbaseApi from '../../src/index.js';

describe('Docbase Group API', () => {

  const docbase = new DocbaseApi({
    version: 1
  });

  context('GET /tag', () => {

    it('should return tags', done => {

      docbase.team.find().then(teams => {
        assert(teams.length > 0);

        const domain = teams[0].domain;

        return docbase.tag.find({domain: domain});
      }).then(tags => {

        assert(tags.length > 0);

      }).then(done, done);
    });
  });
});
