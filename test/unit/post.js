"use strict";

import assert from 'power-assert';
import {assign} from 'lodash';
import DocbaseApi from '../../src/index.js';

describe('Docbase Post API', () => {

  const docbase = new DocbaseApi({
    version: 1
  });

  context('POST /teams/:domain/posts', () => {
    // TODO This test should use mock API.
/*
    it('should return created post', done => {
      const params = {
        title: 'test title',
        body: 'test body',
        draft: false,
        tags: ['test'],
        scope: 'group',
        notice: false
      };

      let domain;

      docbase.team.find().then(teams => {
        assert(teams.length > 0);

        domain = teams[0].domain;

        return docbase.group.find(domain);
      }).then(groups => {
        assert(groups.length > 0);

        const group = groups[0].id;

        return docbase.post.create(domain, assign({}, params, {groups: [group]}));
      }).then(post => {

        assert(post.title === params.title);

      }).then(done, done);
    });
    */
  });
});
