"use strict";

import assert from 'power-assert';
import DocbaseApi from '../../src/index.js';

describe('Docbase Group API', () => {

  const docbase = new DocbaseApi({
    version: 1
  });

  context('GET /teams/:domain/groups', () => {

    it('should return groups', done => {

      docbase.team.find().then(teams => {
        assert(teams.length > 0);

        const domain = teams[0].domain;

        return docbase.group.find(domain);
      }).then(groups => {

        assert(groups.length > 0);

      }).then(done, done);
    });
  });
});
