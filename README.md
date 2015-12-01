# JavaScript DocBase API for Node.JS

This module provides an easy way to use DocBase API.

## Installation

```
$ npm install docbase
```

## Example

### Get Your team

```
import DocBaseApi from '../../src/index.js';

const docbase = new DocBaseApi({
  token: 'xxxxxxxxxxxxx'
});

docbase.team.find().then(teams => {
  // => [{"domain": "example", "name": "your-team"}]
}).catch(error => {

});
```

### POST your articles

```
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
});
```

#### More Info
set DOCBASE_API_TOKEN instead of `DocBaseApi`'s option.

```
$ export DOCBASE_API_TOKEN=xxxxxxxxxx
```

## APIs

|URL|on this module|
|---|---|
|GET /teams| docbase.team.find |
|GET /teams/:domain/groups| docbase.group.find(domainName)|
|GET /teams/:domain/tags| docbase.tags.find(domainName)|
|POST /teams/:domain/posts| docbase.post.create(domainName, params)|

## License
MIT

## Test

```
$ export DOCBASE_API_TOKEN=xxxxxxxxxx
$ npm test
```

## Reference

[DocBase APIドキュメント](https://help.docbase.io/posts/45703)
