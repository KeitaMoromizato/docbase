"use strict";

import assert from 'power-assert';
import DocbaseApi from '../../src/index.js';

describe('Docbase Post API', () => {

  const docbase = new DocbaseApi({
    version: 1
  });

  let domain;
  before(done => {
    docbase.team.find().then(teams => {
      domain = teams[0].domain;
      done();
    }).catch(done);
  });

  context('GET /teams/:domain/posts', () => {

    it('should return posts', done => {

      docbase.post.search(domain).then(res => {

        assert(res.posts.length > 0);

      }).then(done, done);
    });

    it('should return posts in author', done => {

      const author = 'keita_moromizato';

      docbase.post.search(domain, {
        author: author
      }).then(res => {

        assert(res.posts.length > 0);
        res.posts.forEach(p => assert(p.user.name === 'keita_moromizato'));

      }).then(done, done);
    });

    it('should return posts in group', done => {

      const group = '日報';

      docbase.post.search(domain, {
        group: group
      }).then(res => {

        assert(res.posts.length > 0);
        res.posts.forEach(p => assert(p.groups.filter(g => g.name === group).length));

      }).then(done, done);
    });


    it('should return posts attached tag', done => {

      const tag = '日報';

      docbase.post.search(domain, {
        tag: tag
      }).then(res => {

        assert(res.posts.length > 0);
        res.posts.forEach(p => assert(p.tags.filter(t => tag).length));

      }).then(done, done);
    });
  });

  context('GET /teams/:domain/posts/:id', () => {

    it('should return post', (done) => {
      let domain;

      docbase.team.find().then(teams => {
        assert(teams.length > 0);

        domain = teams[0].domain;

        return docbase.post.search(domain, {q : ''});
      }).then(res => {

        assert(res.posts.length > 0);

        return docbase.post.find(domain, res.posts[0].id);
      }).then(post => {

        assert(post.id);

      }).then(done, done);
    });
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
