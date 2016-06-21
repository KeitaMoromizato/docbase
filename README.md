# JavaScript DocBase API for Node.JS

This module provides an easy way to use DocBase API.

## Installation

```
$ npm install docbase
```

#### More Info
set DOCBASE_API_TOKEN instead of `DocBaseApi`'s option.

```
$ export DOCBASE_API_TOKEN=xxxxxxxxxx
```

## APIs

import module

```js
import DocBaseApi from 'docbase';

const docbase = new DocBaseApi({
  token: 'xxxxxxxxxxxxx'
});
```

### 所属チーム取得API

```js
docbase.team.find().then(teams => {
  const domain = teams[0].domain;
  // => teams
}).then(done, done);
```

### メモの検索API

```js
docbase.post.search(domain, {
  q: 'test',
  author: 'keita_moromizato',
  tag: '日報',
  group: '日報'
}).then(res => {
  // => posts
});
```

### 所属グループ取得API

```js
docbase.group.find(domain).then(groups => {
  // => groups
});
```

### タグの取得API

```js
docbase.tag.find(domain).then(tags => {
  // => tags
});
```

### メモの投稿API

```js
const params = {
  title: 'test title',
  body: 'test body',
  draft: false,
  tags: ['test'],
  scope: 'group',
  groups: [1],
  notice: false
};

docbase.post.create(domain, params).then(post => {
  // post
});
```

### メモの詳細取得API

```js
docbase.post.find(domain, 111).then(post => {
  // => post
});
```

### メモの更新API
TODO

### メモの削除API
TODO

## License
MIT

## Test

```
$ export DOCBASE_API_TOKEN=xxxxxxxxxx
$ npm test
```

## Reference

[DocBase APIドキュメント](https://help.docbase.io/posts/45703)
