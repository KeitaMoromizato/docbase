# JavaScript DocBase API for Node.JS

This module provides an easy way to use DocBase API.

## Installation

```
$ npm install docbase
```

## Example

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

or set DOCBASE_API_TOKEN instead of `DocBaseApi`'s option.

```
$ export DOCBASE_API_TOKEN=xxxxxxxxxx
```

## APIs

|URL|on this module|params|
|---|---|---|
|GET /teams| docbase.team.find | - |
|GET /teams/:domain/groups| docbase.group.find | {domain: 'xxxx'}|
|GET /teams/:domain/tags| docbase.tags.find | {domain: 'xxxx'}|

## License
MIT

## Reference

(DocBase APIドキュメント)[https://help.docbase.io/posts/45703]
